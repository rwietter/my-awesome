import { ToastContainer } from 'react-toastify';
import { styled } from '@/features/ui/theme';

const ToastfyCSS = styled(ToastContainer, {
  '.Toastify__toast--error': {
    background: '$gray100',
    borderRadius: '4px',
    color: '$gray50',
    fontSize: '$3',
  },
  '.Toastify__toast--success': {
    background: '$gray100',
    borderRadius: '4px',
    color: '$gray50',
    fontSize: '$3',
  },
  '.Toastify__toast--warning': {
    background: '$gray50',
    borderRadius: '4px',
    fontSize: '$4',
    '.Toastify__toast-body': {
      color: '$gray400',
    },
    '.Toastify__close-button--light': {
      color: '$gray400',
    },
  },
  '.Toastify__progress-bar': {
    background: '$gradient',
  },
  '.Toastify__toast-body': {
    color: '$gray50',
  },
});

export { ToastfyCSS };
