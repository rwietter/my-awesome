import { getSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Jwt from 'jsonwebtoken';
import { unauthorized } from '@/api/utils/http';

const verifyToken = (token: string) => {
  try {
    const secretKey = String(process.env.SECRET_JWT_KEY).trim() as Jwt.Secret;
    const decoded = Jwt.verify(token, secretKey);

    if (!decoded) {
      throw unauthorized({
        message: 'Invalid token',
      });
    }

    return { verified: true };
  } catch (error) {
    return { verified: false };
  }
};

const withProtectRoute = (WrappedComponent: any) => (props: any) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userSession, setUserSession] = useState<any>({});

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();

      if (session) {
        setIsAuthenticated(true);
      } else {
        return signIn();
      }
      setLoading(false);
    };
    securePage();
  }, []);

  if (isAuthenticated) {
    return <WrappedComponent {...props} />;
  }
  return [isLoading, isAuthenticated];
};

export { withProtectRoute };
