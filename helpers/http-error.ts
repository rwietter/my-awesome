const httpError = (error: any, id: string) => {
  console.warn(`error => ${error} and ID => ${id}`);

  const data = {
    statusCode: 400,
    name: '',
    message: '',
  };

  if (!error?.response?.status) return data;

  const { status = '', data: { error: { name = '', message = '' } } } = error.response;

  return { statusCode: status, name, message };
};

export { httpError };
