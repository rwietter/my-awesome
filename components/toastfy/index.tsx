import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

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

const Toastfy = () => (
	<ToastfyCSS hideProgressBar closeOnClick pauseOnHover draggable />
);
const notify = toast;

export { Toastfy, notify };
