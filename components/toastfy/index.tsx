import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, ToastPosition } from 'react-toastify';
import { styled } from '../../styles/theme';

const ToastfyCSS = styled(ToastContainer, {
  '.Toastify__toast--error': {
    background: '$gray100',
    borderRadius: '4px',
    color: '$gray50',
    fontSize: '$3',
  },
  '.Toastify__progress-bar': {
    background: '$gradient',
  },
  '.Toastify__toast-body': {
    color: '$gray50',
  },
});

interface NotifyError {
	id: string;
	name: string;
	statusCode: string | number;
	message: string;
}

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable />
);

const toastfy = toast;

const notifyError = ({
  id = '',
  name = '',
  statusCode = '',
  message = '',
}: NotifyError) => {
  toastfy.error(`${name} (${statusCode}) : ${message}`, {
    position: 'bottom-right',
    toastId: id,
  });
};

export { Toastfy, notifyError };
