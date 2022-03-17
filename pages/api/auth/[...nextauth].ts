import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
/* eslint-disable no-dupe-keys */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { JWTOptions } from 'next-auth/jwt';
import { User } from '@prisma/client';
import Credentials from 'next-auth/providers/credentials';
import { badRequest } from '../utils/http/http-helper';
import { adapter } from '../../../services/api';
import { Prisma } from '../db';
import { unauthorized } from '../utils/http';

interface Payload {
  iss: string;
  sub: number | string;
  exp: number | string;
  data: {
    userId: number | string;
  };
}

const generateJwtToken = (payload: Payload) => new Promise((resolve) => {
  JWT.sign(payload, String(process.env.SECRET_JWT_KEY), (err: any, token: any) => {
    if (err) {
      throw badRequest({
        name: 'ERR_INVALID_TOKEN',
        message: 'Token is invalid',
      });
    }
    resolve(token);
  });
});

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID ?? '',
      clientSecret: process.env.TWITTER_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<any> {
        if (req.method === 'POST') {
          if (!credentials) {
            return Promise.reject();
          }

          const { email, password } = credentials

          try {
            const user = await Prisma.user.findUnique({ where: { email } });
            if (!user) {
              throw unauthorized({
                name: 'ERR_USER_NOT_FOUND',
                message: 'User not found',
              });
            }

            const { password: userPassword } = user;

            if (!userPassword) return;

            if (!bcrypt.compareSync(password, userPassword)) {
              throw unauthorized({
                name: 'ERR_INVALID_PASSWORD',
                message: 'Invalid password',
              });
            }

            if (user.email !== email) {
              throw unauthorized({
                name: 'ERR_INVALID_EMAIL',
                message: 'Invalid email',
              });
            }

            const JWTData = {
              iss: 'awesome',
              sub: user.id,
              exp: Math.floor(Date.now() / 1000) + 60 * 4,
              data: { userId: user.id, name: user.name },
            };

            const jwtToken = await generateJwtToken(JWTData);

            if (!jwtToken) {
              throw unauthorized({
                name: 'ERR_INVALID_TOKEN',
                message: 'Invalid token',
              });
            }

            return {
              message: 'Authorized sign in',
              status: 200,
              accessToken: jwtToken,
              name: user.name,
              email: user.email,
              id: user.id,
            }
          } catch (error) {
            return null;
          }
        }
      },
    }),
  ],
  secret: process.env.SECRET_JWT_KEY,
  session: {
    strategy: 'jwt',
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    maxAge: 30 * 24 * 1, // 30 days
    // updateAge: 30 * 24 * 60 * 8, // 1 hour
  },
  debug: false,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
  },
  callbacks: {
    redirect: async () => {
      return 'http://localhost:3000/home';
    },
    async jwt({
      token, user
    }) {
      if (user) {
        const { accessToken, ...rest } = user;
        token.accessToken = accessToken;
        token.user = rest;
      }
      return token;
    },

    session: async ({ session, token, user }: any) => {
      session.accessToken = token.accessToken;
      return session
    },
  },

  adapter: PrismaAdapter(Prisma),
});
