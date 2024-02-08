import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastingProps {
  type: 'default' | 'success' | 'error' | 'warning';
  txt: string;
}

function toasting({ type = 'default', txt = '' }: ToastingProps) {
  const toastOption: ToastOptions = {
    position: 'bottom-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
  };

  if (type !== ('success' || 'error' || 'warning')) {
    toast(txt, toastOption);
  } else {
    toast[type](txt, toastOption);
  }
}

export default toasting;
