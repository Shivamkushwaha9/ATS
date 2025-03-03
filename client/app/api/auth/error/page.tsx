// app/auth/error/page.jsx (or .tsx if using TypeScript)
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
      <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
        <p><strong>Error:</strong> {error}</p>
        
        {error === 'OAuthAccountNotLinked' && (
          <p className="mt-2">
            You've already signed in with a different account. 
            Please use the same account you used previously.
          </p>
        )}
      </div>
      
      <Link href="/api/auth/signin" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Try again
      </Link>
    </div>
  );
}