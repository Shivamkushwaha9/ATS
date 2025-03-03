// src/hooks/useCurrentUser.js
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (status === 'authenticated' && session?.user?.email) {
        try {
          const response = await fetch(`/api/users?email=${session.user.email}`);
          console.log(response);
          if (response.ok) {
            const data = await response.json();
            // Fetching current user
            console.log(data.user._id)
            setUser(data.user);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      } else if (status === 'unauthenticated') {
        setLoading(false);
      }
    };

    fetchUser();
  }, [session, status]);

  return { user, loading, isAuthenticated: status === 'authenticated' };
};