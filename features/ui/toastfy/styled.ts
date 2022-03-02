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
  '.Toastify__toast--warn': {
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

export { ToastfyCSS };
