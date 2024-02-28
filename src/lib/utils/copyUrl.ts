import copy from 'copy-to-clipboard';
import toasting from '@/lib/utils/toasting';
import toastMessage from '../constants/toastMessage';

function copyUrl(listUrl: string, language: string) {
  try {
    copy(listUrl);
    toasting({ type: 'default', txt: toastMessage[language].copyLink });
  } catch (error) {
    toasting({ type: 'default', txt: toastMessage[language].failedCopyLink });
  }
}

export default copyUrl;
