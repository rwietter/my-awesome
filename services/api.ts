import axios from 'axios';

export const adapter = axios.create({
	baseURL: '/api',
	timeout: 1000,
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
});
