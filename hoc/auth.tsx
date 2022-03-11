import Jwt from 'jsonwebtoken';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authActions } from '@/features/user/store/actions';
import { unauthorized } from '@/api/utils/http';
import { useAuthStore } from '@/features/user/store';

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

const withProtect = (WrappedComponent: any) => (props: any) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token } = useAuthStore();
  const { logout } = authActions();

  useEffect(() => {
    if (!token) {
      router.replace('/user/signin');
    } else {
      const data = verifyToken(token);
      if (data.verified) {
        setIsAuthenticated(true);
      } else {
        logout({ isLoggedIn: false });
        router.replace('/user/signin');
      }
    }
  }, []);

  if (isAuthenticated) {
    return <WrappedComponent {...props} />;
  }
  return null;
};

export { withProtect };
