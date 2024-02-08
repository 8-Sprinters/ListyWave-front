import { useState, useEffect } from 'react';
import * as styles from '@/components/VideoEmbed/VideoEmbed.css';

interface VideoEmbedProps {
  videoUrl: string;
}

function VideoEmbed({ videoUrl }: VideoEmbedProps) {
  const [embedCode, setEmbedCode] = useState<string | null>(null);

  useEffect(() => {
    if (isYouTubeLink(videoUrl)) {
      embedYouTubeVideo(videoUrl);
    } else if (isVimeoLink(videoUrl)) {
      embedVimeoVideo(videoUrl);
    } else {
      console.log('지원하지 않는 플랫폼입니다.');
    }
  }, [videoUrl]);

  const isYouTubeLink = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const isVimeoLink = (url: string) => {
    return url.includes('vimeo.com');
  };

  const embedYouTubeVideo = (url: string) => {
    const videoId = getYoutubeVideoId(url);
    if (videoId) {
      setEmbedCode(
        `<iframe width="100%" height="150px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
      );
    } else {
      console.log('유효하지 않은 url입니다.');
    }
  };

  const embedVimeoVideo = (url: string) => {
    const videoId = getVimeoVideoId(url);
    if (videoId) {
      setEmbedCode(
        `<iframe width="100%" height="150px" src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      );
    } else {
      console.log('유효하지 않은 url입니다.');
    }
  };

  const getYoutubeVideoId = (url: string) => {
    const regExp =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  };

  const getVimeoVideoId = (url: string) => {
    const regExp = /vimeo\.com\/(?:.*\/)?([0-9]+)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  };

  // TODO: XSS이슈 대비로 수정 예정(Dompurify 등 라이브러리 사용)
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoFrame} dangerouslySetInnerHTML={{ __html: embedCode || '' }} />
    </div>
  );
}

export default VideoEmbed;
