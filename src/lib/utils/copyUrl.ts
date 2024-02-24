import copy from 'copy-to-clipboard';
import toasting from '@/lib/utils/toasting';
import toastMessage from '../constants/toastMessage';

function copyUrl(listUrl: string) {
  try {
    copy(listUrl);
    toasting({ type: 'default', txt: toastMessage.ko.copyLink });
  } catch (error) {
    toasting({ type: 'default', txt: toastMessage.ko.failedCopyLink });
  }
}

export default copyUrl;
