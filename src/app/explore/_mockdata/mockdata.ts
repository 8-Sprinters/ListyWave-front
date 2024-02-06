import { ListRecommendationType } from './mockdataType';

export const recommendationUsersMockdata = [
  {
    id: 1,
    nickname: '또치',
    profileImageUrl:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/b6986e14-7ef5-46cb-9601-d629c39398d5-profile_image-300x300.png',
  },
  {
    id: 2,
    nickname: '도우너',
    profileImageUrl:
      'https://post-phinf.pstatic.net/MjAxOTA0MDlfMTcz/MDAxNTU0NzkxMjk1NDA2.OrI4NbYkl4EdgW7y4hAuYFGzAOSl3MOQ5cIKAHw2HQAg.pmX_EPXxuCmkFWVnfv4UGmdr_zDv-FTuNnood0NzxAsg.PNG/IMmqBqFXqdaknIHKRNJ5gt_UxiCw.jpg?type=w400',
  },
  {
    id: 3,
    nickname: '둘리',
    profileImageUrl: 'https://img.khan.co.kr/news/2010/02/01/3-2.jpg',
  },
  {
    id: 4,
    nickname: '고길동',
    profileImageUrl: 'https://file2.nocutnews.co.kr/newsroom/image/2018/04/04/20180404161651944414_0_500_400.jpg',
  },
  {
    id: 5,
    nickname: '마이콜',
    profileImageUrl:
      'https://mblogthumb-phinf.pstatic.net/MjAyMDA2MDVfMTE2/MDAxNTkxMzM2MTI4Mzkz.VZWWoAYSV1Cc9R1k-1b6oTDItZf50tFehFF6C8ssTlwg.vZku-Aq6aTdp2ZXvHbBbUBs7Vvb5PR6UklHVB_kcpQcg.JPEG.gjhk8/1.JPG?type=w800',
  },
  {
    id: 6,
    nickname: '스펀지밥',
    profileImageUrl: 'https://image.kmib.co.kr/online_image/2015/0901/201509011021_61130009809791_1.jpg',
  },
  {
    id: 7,
    nickname: '뚱이',
    profileImageUrl:
      'https://i.namu.wiki/i/Q6BIqhZWqyhBAFmeZoOWIFO2Ttw1X0xOimLTY0WyohXIadIRIoxaAWc6yoggyEKohkI3aDCoKXsBlp6rvL-MFg.webp',
  },
  {
    id: 8,
    nickname: '징징이',
    profileImageUrl:
      'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/_BgxxT5WgBiLrjEDZ8_rjzeQsUQ.jpg',
  },
  {
    id: 9,
    nickname: '달퐁이',
    profileImageUrl:
      'https://i.namu.wiki/i/IG_8BCRw6mRImgRKKkeasgLHiTKvAI0_VnmIIacb30qcN0ERuQjzb19yTI_OFMPTA-IsibxY0ua9K-1HQ0sWKg.webp',
  },
  {
    id: 10,
    nickname: '플랑크톤',
    profileImageUrl:
      'https://i.namu.wiki/i/Sww4DrjHSE4sD3-cQXwOzkjRDGReI0K8h7oLOq6yTKxIpfix5-Hx4aUxdjIU3qO-5OvgvuMiUoUG949qma9ODw.webp',
  },
];

export const ListRecommendationMockdata: ListRecommendationType[] = [
  {
    id: 1,
    category: '엔터테인먼트',
    backgroundColor: 'rgba(208, 255, 137, 0.70)',
    listUrl: '/userId/3',
    ownerNickname: '영화덕후',
    ownerProfileImage:
      'https://i.namu.wiki/i/_-EekiUJoj0-EOwlSPGtIND3FEPxQnqtdsc6W5uqLLytHyApzbLtwowopTRvT0wgfQqU-QORq1SPaQAGXVoeaw.webp',
    labels: [
      {
        id: 1,
        name: '영화',
      },
      {
        id: 2,
        name: '코믹',
      },
      {
        id: 3,
        name: '꿀잼',
      },
    ],
    title: '살면서 본 가장 재미있는 영화 TOP10',
    description: '재밌는 영화만 10편! 너무 재미있게 본 영화들만 정리했어요!',
    items: [
      {
        id: 1,
        rank: 1,
        title: '인셉션',
        imageUrl: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/DHKQ6QRGY5BP4EWRLA6I63SLYI.jpg',
      },
      {
        id: 2,
        rank: 2,
        title: '오펜하이머',
        imageUrl:
          'https://i.namu.wiki/i/m6l0w2CgAGQrxSKy7rrcLB261rrMO-oq04ZCnS-wEU5sNqq8rR-gG2Zki_HloDFgP7gdfM_IoQK_m19OGqJKjw.webp',
      },
      {
        id: 3,
        rank: 3,
        title: '탑건:메버릭',
        imageUrl:
          'https://i.namu.wiki/i/X3zvHLy5H1N5NgV6dGHGYpO5PeHGjyG4ZdhzxgIu-P7Nu_MC0wusUJ1yQZFv8PfjKfBPfNykuk1kVGP76P_vLw.webp',
      },
    ],
  },
  {
    id: 1,
    category: '엔터테인먼트',
    backgroundColor: 'rgba(208, 255, 137, 0.70)',
    listUrl: '/userId/3',
    ownerNickname: '영화덕후',
    ownerProfileImage:
      'https://i.namu.wiki/i/_-EekiUJoj0-EOwlSPGtIND3FEPxQnqtdsc6W5uqLLytHyApzbLtwowopTRvT0wgfQqU-QORq1SPaQAGXVoeaw.webp',
    labels: [
      {
        id: 1,
        name: '영화',
      },
      {
        id: 2,
        name: '코믹',
      },
      {
        id: 3,
        name: '꿀잼',
      },
    ],
    title: '살면서 본 가장 재미있는 영화 TOP10',
    description: '재밌는 영화만 10편! 너무 재미있게 본 영화들만 정리했어요!',
    items: [
      {
        id: 1,
        rank: 1,
        title: '인셉션',
        imageUrl: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/DHKQ6QRGY5BP4EWRLA6I63SLYI.jpg',
      },
      {
        id: 2,
        rank: 2,
        title: '오펜하이머',
        imageUrl:
          'https://i.namu.wiki/i/m6l0w2CgAGQrxSKy7rrcLB261rrMO-oq04ZCnS-wEU5sNqq8rR-gG2Zki_HloDFgP7gdfM_IoQK_m19OGqJKjw.webp',
      },
      {
        id: 3,
        rank: 3,
        title: '탑건:메버릭',
        imageUrl:
          'https://i.namu.wiki/i/X3zvHLy5H1N5NgV6dGHGYpO5PeHGjyG4ZdhzxgIu-P7Nu_MC0wusUJ1yQZFv8PfjKfBPfNykuk1kVGP76P_vLw.webp',
      },
    ],
  },
  {
    id: 1,
    category: '엔터테인먼트',
    backgroundColor: 'rgba(208, 255, 137, 0.70)',
    listUrl: '/userId/3',
    ownerNickname: '영화덕후',
    ownerProfileImage:
      'https://i.namu.wiki/i/_-EekiUJoj0-EOwlSPGtIND3FEPxQnqtdsc6W5uqLLytHyApzbLtwowopTRvT0wgfQqU-QORq1SPaQAGXVoeaw.webp',
    labels: [
      {
        id: 1,
        name: '영화',
      },
      {
        id: 2,
        name: '코믹',
      },
      {
        id: 3,
        name: '꿀잼',
      },
    ],
    title: '살면서 본 가장 재미있는 영화 TOP10',
    description: '재밌는 영화만 10편! 너무 재미있게 본 영화들만 정리했어요!',
    items: [
      {
        id: 1,
        rank: 1,
        title: '인셉션',
        imageUrl: 'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/DHKQ6QRGY5BP4EWRLA6I63SLYI.jpg',
      },
      {
        id: 2,
        rank: 2,
        title: '오펜하이머',
        imageUrl:
          'https://i.namu.wiki/i/m6l0w2CgAGQrxSKy7rrcLB261rrMO-oq04ZCnS-wEU5sNqq8rR-gG2Zki_HloDFgP7gdfM_IoQK_m19OGqJKjw.webp',
      },
      {
        id: 3,
        rank: 3,
        title: '탑건:메버릭',
        imageUrl:
          'https://i.namu.wiki/i/X3zvHLy5H1N5NgV6dGHGYpO5PeHGjyG4ZdhzxgIu-P7Nu_MC0wusUJ1yQZFv8PfjKfBPfNykuk1kVGP76P_vLw.webp',
      },
    ],
  },
];
