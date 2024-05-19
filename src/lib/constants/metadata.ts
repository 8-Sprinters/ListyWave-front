import DOMAIN_URL from './domain';

const METADATA = {
  title: {
    template: '%s | ListyWave', // Template Object
    default: 'ListyWave | 리스티웨이브',
    openGraph: 'ListyWave',
  },
  description: {
    default:
      "나의 취향을 리스트로 기록하고, 공유하고, 발견해요. 리스티웨이브에서 모든 기준은 '나의 취향'이에요. 내 취향 가득한 편안한 공간이 되면 좋겠습니다.",
    mylist: '나의 취향을 기록한 리스트 입니다.',
    collabolist: '콜라보레이터와 함께 기록한 콜라보 리스트 입니다.',
  },
  authors: {
    name: '에잇🩷',
    url: 'https://github.com/8-Sprinters',
  },
  generator: 'Next.js',
  applicationName: 'ListyWave',
  referrer: 'origin-when-cross-origin', // Referrer-Policy
  keywords: ['ListyWave', 'list', '리스티웨이브'],
  url: DOMAIN_URL,
  type: 'website',
  siteName: 'ListyWave',
  locale: 'ko',
};

export default METADATA;
