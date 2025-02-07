from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
import requests
from bs4 import BeautifulSoup
import sqlite3
import feedparser

class Job(BaseModel):
    title: str
    company: str
    location: str
    description: str
    salary_range: Optional[str]
    posted_date: datetime
    source_url: str
    job_type: str

class JobBoard:
    def __init__(self, db_path="jobs.db"):
        self.db_path = db_path
        self.setup_database()
    
    def setup_database(self):
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        c.execute('''
            CREATE TABLE IF NOT EXISTS jobs
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
             title TEXT,
             company TEXT,
             location TEXT,
             description TEXT,
             salary_range TEXT,
             posted_date TIMESTAMP,
             source_url TEXT UNIQUE,
             job_type TEXT)
        ''')
        conn.commit()
        conn.close()

    async def fetch_rss_jobs(self, feed_url: str) -> List[Job]:
        feed = feedparser.parse(feed_url)
        jobs = []
        
        for entry in feed.entries:
            job = Job(
                title=entry.title,
                company=entry.get('author', 'Unknown'),
                location=entry.get('location', 'Remote/Unspecified'),
                description=entry.description,
                posted_date=datetime.fromtimestamp(
                    mktime(entry.published_parsed)
                ) if hasattr(entry, 'published_parsed') else datetime.now(),
                source_url=entry.link,
                job_type='full-time'  # Default value, adjust as needed
            )
            jobs.append(job)
        
        return jobs

    def save_job(self, job: Job):
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        try:
            c.execute('''
                INSERT INTO jobs 
                (title, company, location, description, salary_range, 
                 posted_date, source_url, job_type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                job.title, job.company, job.location, job.description,
                job.salary_range, job.posted_date, job.source_url, job.job_type
            ))
            conn.commit()
        except sqlite3.IntegrityError:
            # Skip if job already exists (based on source_url)
            pass
        finally:
            conn.close()

app = FastAPI()
job_board = JobBoard()

@app.get("/jobs/")
async def get_jobs(
    page: int = 1,
    per_page: int = 20,
    search: Optional[str] = None,
    location: Optional[str] = None
):
    conn = sqlite3.connect(job_board.db_path)
    c = conn.cursor()
    
    query = "SELECT * FROM jobs WHERE 1=1"
    params = []
    
    if search:
        query += " AND (title LIKE ? OR description LIKE ?)"
        params.extend([f"%{search}%", f"%{search}%"])
    
    if location:
        query += " AND location LIKE ?"
        params.append(f"%{location}%")
    
    query += " ORDER BY posted_date DESC LIMIT ? OFFSET ?"
    params.extend([per_page, (page - 1) * per_page])
    
    c.execute(query, params)
    jobs = c.fetchall()
    conn.close()
    
    return {"jobs": jobs, "page": page, "per_page": per_page}

@app.get("/jobs/{job_id}")
async def get_job(job_id: int):
    conn = sqlite3.connect(job_board.db_path)
    c = conn.cursor()
    c.execute("SELECT * FROM jobs WHERE id = ?", (job_id,))
    job = c.fetchone()
    conn.close()
    
    if job is None:
        raise HTTPException(status_code=404, detail="Job not found")
    return job