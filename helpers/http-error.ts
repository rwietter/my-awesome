import { notifyError } from '@/features/ui';

function handleError(error: any) {
  const { response } = error;

  const status = response?.data?.error?.status ?? 400; // No data available

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

export { handleError };
