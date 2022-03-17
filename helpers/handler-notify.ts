import { notify } from '@/features/ui';

function handleError(error: any) {
  const { response } = error;

  const errorData = response?.data ?? '';
  const errMsg = errorData?.message ?? 'Something went wrong';

  console.log(errorData);

  notify({
    message: errMsg,
    type: 'error',
  });
}

function handleSuccess(payload: any) {
  const { response } = payload;

  const message = response?.data?.message ?? payload;

  notify({
    message,
    type: 'success',
  });
}

export { handleError, handleSuccess };
