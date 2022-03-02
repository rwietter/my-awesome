import { notify } from '@/features/ui';

function handleError(error: any) {
  const { response } = error;

  const errorData = response?.data.error ?? '';

  const status = errorData?.status ?? 400; // No data available

  const errMsg = errorData?.message ?? 'Something went wrong';

  notify({
    name: `${errorData?.name ?? 'Error '}`,
    status: `${status ?? -1}`,
    message: errMsg,
    type: 'error',
  });
}

function handleSuccess(payload: any) {
  const { response } = payload;

  const status = response?.data?.status ?? 200;

  const message = response?.data?.message ?? payload;

  notify({
    name: `${response?.statusText ?? 'Success '}`,
    status: `${status ?? -1}`,
    message,
    type: 'success',
  });
}

export { handleError, handleSuccess };
