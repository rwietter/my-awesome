import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastfyCSS } from './styled';

interface NotifyError {
	id?: string;
	message: string;
	type?: 'warn' | 'error' | 'info' | 'success';
}

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable autoClose={false} />
);

const toastfy = toast;

const notify = ({
  id = '',
  message = '',
  type = 'warn',
}: NotifyError) => {
  toastfy[type](`${message}`, {
    position: 'bottom-right',
    autoClose: 3000,
    draggable: true,
    toastId: `${id}-${Math.floor(Math.random() * (90 - 1 + 1)) + 1}`,
  });
};

export { Toastfy, notify };
