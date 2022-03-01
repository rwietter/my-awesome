import { NextApiRequest, NextApiResponse } from 'next';

export declare module 'next' {
	interface Express {
		req: string;
	}
}

export type Content = {
	[key in string]: {
		name: string;
		url: string;
	}[];
};

interface ErrorHelper {
	name?: string;
	message: string;
	status?: number;
}

export interface IsOk {
	isLoading: boolean;
	isError: boolean;
}

export interface ExtendedApiRequest extends NextApiRequest {
	user: {
		id: string;
		email: string;
		name: string;
		password: string;
	};
}

export interface ExtendedApiResponse extends NextApiResponse {}
