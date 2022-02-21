import { NextApiRequest, NextApiResponse } from 'next';

export interface ExtendedApiRequest extends NextApiRequest {
	user: {
		id: string;
		email: string;
		name: string;
		password: string;
	};
}

export interface ExtendedApiResponse extends NextApiResponse {}
