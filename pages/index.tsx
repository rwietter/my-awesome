import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { Background } from '../components/background';

const Home: NextPage = () => <Background />;
export default Home;
