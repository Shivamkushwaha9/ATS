// src/app/api/experiences/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Forward the GET request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/experiences?userId=${userId}`);
    const data = await response.json();

    if (!response.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { error: data.error || 'Failed to fetch experiences' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Forward the POST request to your backend
    const response = await fetch(`${process.env.BACKEND_URL}/api/experiences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Backend error:', data);
      return NextResponse.json(
        { error: data.error || 'Failed to create experience' },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}






// This worked 
// // import { NextResponse } from 'next/server';


// import { NextResponse } from 'next/server';
// // export async function GET(request) {
// //   const { searchParams } = new URL(request.url);
// //   const userId = searchParams.get('userId');

// //   if (!userId) {
// //     return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
// //   }

// //   try {
// //     const response = await fetch(`${process.env.BACKEND_URL}/api/experiences?userId=${userId}`);
// //     const data = await response.json();
// //     return NextResponse.json(data);
// //   } catch (error) {
// //     console.error('Error fetching experiences:', error);
// //     return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
// //   }
// // }







// //Ye to ekdam initial wala tha -> which wasnt working at all

// export async function POST(request) {
//   try {
//     const body = await request.json();
    
//     // Log the received data
//     console.log('API route hit with body:', body);
    
//     // Ensure userId is present
//     if (!body.userId) {
//       return NextResponse.json(
//         { error: 'User ID is required' }, 
//         { status: 400 }
//       );
//     }
    
//     // Forward the request to your backend
//     const response = await fetch(`${process.env.BACKEND_URL}/api/experiences`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       console.error('Backend error:', data);
//       return NextResponse.json(
//         { error: data.error || 'Failed to create experience' }, 
//         { status: response.status }
//       );
//     }
    
//     return NextResponse.json(data, { status: 201 });
//   } catch (error) {
//     console.error('Error processing request:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' }, 
//       { status: 500 }
//     );
//   }
// }