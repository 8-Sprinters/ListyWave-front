import { toPng } from 'html-to-image';
import toasting from '@/lib/utils/toasting';

interface saveImageFromHtmlProps {
  filename: string;
}
async function saveImageFromHtml({ filename }: saveImageFromHtmlProps) {
  const saveElement: HTMLElement | null = document.querySelector('#rankList');
  if (!saveElement) {
    console.error('리스트를 찾을 수 없습니다.');
    return;
  }
  try {
    toPng(saveElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = filename + '.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log('error', err);
      });
    // TODO: 토스트가 아닌 모달로 변경해야함. 이미지도 함께 넣어야한다.
    toasting({ type: 'default', txt: '이미지를 복사했습니다.' });
  } catch (error) {
    toasting({ type: 'default', txt: '이미지를 복사를 실패했습니다.' });
  }
}

export default saveImageFromHtml;
