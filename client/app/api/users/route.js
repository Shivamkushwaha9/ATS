// src/app/api/users/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../auth/[...nextauth]/route.ts';
import {authOptions} from '../auth/[...nextauth]/route.ts'



export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  
  // Get the session to verify the request is authorized
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Only allow users to get their own data
  if (email !== session.user.email) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  try {
    //Idk but email here is interpreted as query -> after question mark is query ? ask chat gpt
    const response = await fetch(`${process.env.BACKEND_URL}/api/users?email=${email}`);
    if(!response){
      console.log("Bhay response hi nahi mila aur ye rhaa khali response \n",response);
    }
    
    if (!response.ok) {
      // If user doesn't exist in backend yet, create them
      if (response.status === 404) {
        const createResponse = await fetch(`${process.env.BACKEND_URL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
            googleId: session.user.id,
          }),
        });
        
        const data = await createResponse.json();
        return NextResponse.json(data);
      }
      
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: response.status });
    }
    const data = await response.json();
    // console.log("Are vaii ye to data hai from line 57 from usersroute.js\n",NextResponse.json(data));


    //Yaha pe NextResponse.json(data) isliye return kr rahe cuz ye HHTP req me wrap karta apne data/resonse ko aur agar data ko frontend me access karna hai to just use response = 'blah blah->chat gpt krle bhai' and then .json() you will the get OG data you're getting here, this way It is protected and shit hope you understand bhai, now go cry why you took computer science then debug it further
    return NextResponse.json(data);


  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}