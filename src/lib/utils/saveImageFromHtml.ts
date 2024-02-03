import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

function saveImageFromHtml({ el, filename }) {
  toPng(el)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = filename + '.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log('error', err);
    });
}

export default saveImageFromHtml;
