import Lottie from 'react-lottie';
import animation from './Animation - 1708700954738.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={100} width={100} />;
}

export default Loading;
