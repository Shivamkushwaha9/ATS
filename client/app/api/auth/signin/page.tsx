// app/auth/signin/page.jsx
'use client';

import { signIn } from "next-auth/react";
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google', { callbackUrl })}>
        Sign in with Google
      </button>
    </div>
  );
}