import { withProtect } from 'hoc/auth';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { AwesomeList } from '@/features/awesome-list';
import { adapter } from '@/services/api';
import { withProtectRoute } from '@/hoc/auth-hoc';

const HomePage = () => <AwesomeList />;

export default withProtectRoute(HomePage);
