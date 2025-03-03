//@ts-nocheck
// src/app/api/experiences/[id]/route.js
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/experiences/${id}`, {
    // const response = await fetch(`http://localhost:3001/api/experiences/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to update experience' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  console.log(userId)
  
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/experiences/${id}?userId=${userId}`, {
    // const response = await fetch(`http://localhost:3001/api/experiences/${id}?userId=${userId}`, {
      method: 'DELETE',
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}