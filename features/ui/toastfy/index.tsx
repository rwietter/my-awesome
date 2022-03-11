import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastfyCSS } from './styled';

interface NotifyError {
	id?: string;
	name?: string;
	status: string;
	message: string;
	type?: 'warn' | 'error' | 'info' | 'success';
}

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable autoClose={false} />
);

const toastfy = toast;

const notify = ({
  id = '',
  name = '',
  message = '',
  status = '',
  type = 'warn',
}: NotifyError) => {
  toastfy[type](`${name} (${status}): ${message}`, {
    position: 'bottom-right',
    toastId: `${id}-${Math.floor(Math.random() * (90 - 1 + 1)) + 1}`,
  });
};

export { Toastfy, notify };
