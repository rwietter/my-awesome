const httpError = (err: any) => {
	if (!err) return { statusCode: '', name: '', message: '' };

	const {
		statusCode,
		body: { name, message },
	} = err.response.data.error;
	return { statusCode, name, message };
};

export { httpError };
