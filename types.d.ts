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
