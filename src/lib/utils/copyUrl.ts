import copy from 'copy-to-clipboard';
import toasting from '@/lib/utils/toasting';

function copyUrl(listUrl: string) {
  try {
    copy(listUrl);
    toasting({ type: 'default', txt: '링크가 복사되었습니다.' });
  } catch (error) {
    toasting({ type: 'default', txt: '링크 복사를 실패했습니다.' });
  }
}

export default copyUrl;
