import { spawn } from 'child_process';
import { saveGenQuestionsInMongoDB } from './question.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handleFileUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const filePath = req.file.path;
        
        // Adjust the path to your Python script relative to this controller
        const pythonScriptPath = path.join(__dirname, '../python_scripts/your_script.py');
        
        const pythonProcess = spawn('python', [pythonScriptPath, filePath]);
        
        let jsonOutput = '';
        let errorOutput = '';

        pythonProcess.stdout.on('data', (data) => {
            jsonOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        pythonProcess.on('close', async (code) => {
            if (code !== 0) {
                console.error('Python script error:', errorOutput);
                return res.status(500).json({ error: 'Processing failed' });
            }

            try {
                const processedData = JSON.parse(jsonOutput);
                const result = await saveGenQuestionsInMongoDB(processedData);
                res.json(result);
            } catch (error) {
                console.error('Error processing JSON or saving to MongoDB:', error);
                res.status(500).json({ error: 'Failed to process data' });
            }
        });

    } catch (error) {
        console.error('Upload handler error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};