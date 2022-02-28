import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastfyCSS } from './styled';

interface NotifyError {
	id?: string;
	name?: string;
	status: string;
	message: string;
}

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable />
);

const toastfy = toast;

const notifyError = ({
  id = '',
  name = '',
  message = '',
  status = '',
}: NotifyError) => {
  toastfy.error(`${name} (${status}): ${message}`, {
    position: 'bottom-right',
    toastId: `${id}-${Math.floor(Math.random() * (20 - 1 + 1)) + 1}`,
  });
};

export { Toastfy, notifyError };
