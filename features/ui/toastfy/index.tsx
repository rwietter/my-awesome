import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { randomUUID } from 'crypto';
import { v4 as uuidV4 } from 'uuid';
import { ToastfyCSS } from './styled';

interface NotifyError {
	message: string;
	type?: 'warn' | 'error' | 'info' | 'success';
}

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable autoClose={3000} />
);

const toastfy = toast;

const notify = ({
  message = '',
  type = 'warn',
}: NotifyError) => {
  toastfy[type](`${message}`, {
    position: 'bottom-center',
    toastId: `${uuidV4()}`,
  });
};

export { Toastfy, notify };
