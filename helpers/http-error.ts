import { notifyError } from '@/features/ui';

const httpError = (error: any, id: string) => {
  const data = {
    statusCode: 400,
    name: '',
    message: '',
  };

  if (!error?.response?.status) return data;

  const {
    status = '',
    data: {
      error: { name = '', message = '' },
    },
  } = error.response;

  return { statusCode: status, name, message };
};

function handleError(error: any) {
  const { response } = error;

  const status = (
    response.data
		&& response.data.error
		&& response.data.error.status)
		|| 400; // No data available

  if (status === 500) {
    return;
  }

  const errMsg = response?.data?.error?.message ?? 'Something went wrong';

  notifyError({
    name: `${response?.statusText ?? 'Error '}`,
    status: `${response?.status ?? -1}`,
    message: errMsg,
  });
}

export { httpError, handleError };
