import { useState, useEffect } from 'react';
import { toast, ToastOptions, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastingProps {
  type: 'default' | 'success' | 'error' | 'warning';
  txt: string;
}

const useToasting = ({ type = 'default', txt = '' }: ToastingProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      const toastOption: ToastOptions = {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      };

      if (type !== ('success' || 'error' || 'warning')) {
        toast(txt, toastOption);
      } else {
        (toast[type] as Function)(txt, toastOption);
      }
    } else {
      setIsInitialized(true);
    }
  }, [isInitialized, type, txt]);
};

export default useToasting;
