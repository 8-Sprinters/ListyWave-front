export const MOCKDATA_LIST = [
  {
    category: '음악',
    labels: [
      {
        name: '세븐틴',
      },
      {
        name: '음악의 신',
      },
      {
        name: '최애 멤버',
      },
    ],
    title: '세븐틴 최애 멤버 Top 5',
    description: '내가 좋아하는 세븐틴에서 최애 멤버 top5',
    createdDate: '2022-01-15T11:00:05.817Z',
    lastUpdatedDate: '2024-01-20T13:00:05.817Z', // 가장 마지막에 저장된 히스토리의 날짜
    ownerId: 'tarea202001@gmail.com',
    ownerNickname: 'nabongee',
    ownerProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    collaborators: [
      // Nullable
      {
        id: 1,
        nickname: '현지',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2023/07/16/12/32/cat-8130611_640.jpg',
      },
    ],
    items: [
      {
        id: 1,
        rank: 1,
        title: '전원우',
        comment: '전원우 존잘임', // Nullable
        link: null, // Nullable
        imageUrl:
          'https://yt3.googleusercontent.com/AmdlIs_zKRbg1LUzyDC2aQu9UHklGlWibXNVolKlgseHaCKEOLDESXNwYX0hQp2lSGJoQDBN=s900-c-k-c0x00ffffff-no-rj', // Nullable
      },
      {
        id: 2,
        rank: 2,
        title: '호시',
        comment: '작은 아기 호랑이',
        link: null,
        imageUrl: 'https://image.bugsm.co.kr/artist/images/1000/802323/80232314.jpg',
      },
      {
        id: 3,
        rank: 3,
        title: '부승관',
        comment: 'boo',
        link: null,
        imageUrl:
          'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/10/33d10ea7-d2c4-4260-8381-cbf644c9972e.jpg',
      },
      {
        id: 4,
        rank: 4,
        title: '정한',
        comment: '남신',
        link: null,
        imageUrl: 'https://news.kbs.co.kr/data/news/2022/04/13/20220413_c85vo7.jpg',
      },
      {
        id: 5,
        rank: 5,
        title: '디에잇',
        comment: '웃김',
        link: null,
        imageUrl:
          'data:image/jpeg;base64,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',
      },
    ],
    isCollected: true,
  },
  {
    category: '장소',
    labels: [
      {
        name: '서울',
      },
      {
        name: '카페',
      },
      {
        name: '디저트',
      },
    ],
    title: '맛있는 을지로 카페 Top5',
    description: '커피가 맛있는 서울 카페들',
    createdDate: '2024-01-16T13:00:05.817Z',
    lastUpdatedDate: '2024-01-23T13:00:05.817Z', // 가장 마지막에 저장된 히스토리의 날짜
    ownerId: 'tarea202001@gmail.com',
    ownerNickname: 'nabongee',
    ownerProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    collaborators: null,
    items: [
      {
        id: 1,
        rank: 1,
        title: '이프프커피',
        comment: '을지로 크림카페, 티라미수 맛집', // Nullable
        link: 'https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%B9%B4%ED%8E%98/place/1113055605?c=15.00,0,0,0,dh&placePath=%3Fentry%3Dbmp', // Nullable
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240125_142%2F1706170547004iEWpa_JPEG%2F%25BF%25A1%25BD%25BA%25C7%25C1%25B7%25B9%25BC%25D2_%25BA%25B9%25BB%25E7%25BA%25BB.jpg', // Nullable
      },
      {
        id: 2,
        rank: 2,
        title: '을지로 문덕 커피',
        comment: '촙촙 바로 옆 건물 골목길 초입',
        link: 'https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%B9%B4%ED%8E%98/place/1046777005?c=15.00,0,0,0,dh&placePath=%3Fentry%3Dbmp',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220322_105%2F1647938541721kvaqf_JPEG%2FIMG_20220320_181609_849.jpg',
      },
      {
        id: 3,
        rank: 3,
        title: '보잉',
        comment: '공항 컨셉 카페',
        link: 'https://m.place.naver.com/share?id=1055469623&tabsPath=%2Fhome&appMode=detail',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240123_153%2F1705941421630Jj4f6_JPEG%2FIMG_3251.jpeg',
      },
      {
        id: 4,
        rank: 4,
        title: '공간갑',
        comment: '공간이 갑이에요',
        link: 'https://m.place.naver.com/share?id=1053282197&tabsPath=%2Fhome&appMode=detail',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210820_184%2F1629432280312yxh2Q_JPEG%2FUuWYISVR47gu08_pqiflKOPd.jpg',
      },
      {
        id: 5,
        rank: 5,
        title: '커피한약방',
        comment: '허준 선생님의 혜민서를 개조한 카페',
        link: 'https://naver.me/IIqf14Bp',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMjZfMTY0%2FMDAxNzA2MjM4NDU4NjU1.wUX3yX7JmXR1p9WgkkVfRHL4_KLEBbl25r3p3kLmKgkg.F8nRZinwmV_VxMXWbZ2MPcZPpcLzUxurYOTQrn6SFdgg.JPEG%2F763BC882-BB25-4788-809B-DBAED88B1652.jpeg',
      },
    ],
    isCollected: false,
  },
  {
    category: '음악',
    labels: [
      {
        name: '세븐틴',
      },
      {
        name: '음악의 신',
      },
      {
        name: '최애 멤버',
      },
    ],
    title: '세븐틴 최애 멤버 Top 5',
    description: '세븐틴에서 최애 멤버 top5',
    createdDate: '2024-01-15T13:00:05.817Z',
    lastUpdatedDate: '2024-01-20T13:00:05.817Z', // 가장 마지막에 저장된 히스토리의 날짜
    ownerId: 'tarea202001@gmail.com',
    ownerNickname: 'nabongee',
    ownerProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    collaborators: [
      // Nullable
      {
        id: 1,
        nickname: '현지',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2023/07/16/12/32/cat-8130611_640.jpg',
      },
    ],
    items: [
      {
        id: 1,
        rank: 1,
        title: '전원우',
        comment: '전원우 존잘임', // Nullable
        link: null, // Nullable
        imageUrl:
          'https://yt3.googleusercontent.com/AmdlIs_zKRbg1LUzyDC2aQu9UHklGlWibXNVolKlgseHaCKEOLDESXNwYX0hQp2lSGJoQDBN=s900-c-k-c0x00ffffff-no-rj', // Nullable
      },
      {
        id: 2,
        rank: 2,
        title: '호시',
        comment: '작은 아기 호랑이',
        link: null,
        imageUrl: 'https://image.bugsm.co.kr/artist/images/1000/802323/80232314.jpg',
      },
      {
        id: 3,
        rank: 3,
        title: '부승관',
        comment: 'boo',
        link: null,
        imageUrl:
          'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/10/33d10ea7-d2c4-4260-8381-cbf644c9972e.jpg',
      },
      {
        id: 4,
        rank: 4,
        title: '정한',
        comment: '남신',
        link: null,
        imageUrl: 'https://news.kbs.co.kr/data/news/2022/04/13/20220413_c85vo7.jpg',
      },
      {
        id: 5,
        rank: 5,
        title: '디에잇',
        comment: '웃김',
        link: null,
        imageUrl:
          'data:image/jpeg;base64,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',
      },
    ],
    isCollected: false,
  },
  {
    category: '장소',
    labels: [
      {
        name: '서울',
      },
      {
        name: '카페',
      },
      {
        name: '디저트',
      },
    ],
    title: '맛있는 을지로 카페 Top5',
    description: '커피가 맛있는 서울 카페들',
    createdDate: '2024-01-16T13:00:05.817Z',
    lastUpdatedDate: '2024-01-23T13:00:05.817Z', // 가장 마지막에 저장된 히스토리의 날짜
    ownerId: 'tarea202001@gmail.com',
    ownerNickname: 'nabongee',
    ownerProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
    collaborators: null,
    items: [
      {
        id: 1,
        rank: 1,
        title: '이프프커피',
        comment: '을지로 크림카페, 티라미수 맛집', // Nullable
        link: 'https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%B9%B4%ED%8E%98/place/1113055605?c=15.00,0,0,0,dh&placePath=%3Fentry%3Dbmp', // Nullable
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240125_142%2F1706170547004iEWpa_JPEG%2F%25BF%25A1%25BD%25BA%25C7%25C1%25B7%25B9%25BC%25D2_%25BA%25B9%25BB%25E7%25BA%25BB.jpg', // Nullable
      },
      {
        id: 2,
        rank: 2,
        title: '을지로 문덕 커피',
        comment: '촙촙 바로 옆 건물 골목길 초입',
        link: 'https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%B9%B4%ED%8E%98/place/1046777005?c=15.00,0,0,0,dh&placePath=%3Fentry%3Dbmp',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220322_105%2F1647938541721kvaqf_JPEG%2FIMG_20220320_181609_849.jpg',
      },
      {
        id: 3,
        rank: 3,
        title: '보잉',
        comment: '공항 컨셉 카페',
        link: 'https://m.place.naver.com/share?id=1055469623&tabsPath=%2Fhome&appMode=detail',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240123_153%2F1705941421630Jj4f6_JPEG%2FIMG_3251.jpeg',
      },
      {
        id: 4,
        rank: 4,
        title: '공간갑',
        comment: '공간이 갑이에요',
        link: 'https://m.place.naver.com/share?id=1053282197&tabsPath=%2Fhome&appMode=detail',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210820_184%2F1629432280312yxh2Q_JPEG%2FUuWYISVR47gu08_pqiflKOPd.jpg',
      },
      {
        id: 5,
        rank: 5,
        title: '커피한약방',
        comment: '허준 선생님의 혜민서를 개조한 카페',
        link: 'https://naver.me/IIqf14Bp',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMjZfMTY0%2FMDAxNzA2MjM4NDU4NjU1.wUX3yX7JmXR1p9WgkkVfRHL4_KLEBbl25r3p3kLmKgkg.F8nRZinwmV_VxMXWbZ2MPcZPpcLzUxurYOTQrn6SFdgg.JPEG%2F763BC882-BB25-4788-809B-DBAED88B1652.jpeg',
      },
    ],
    isCollected: false,
  },
  {
    category: '장소',
    labels: [
      {
        name: '청라',
      },
      {
        name: '맛집',
      },
    ],
    title: '호주에서 갓 귀국한 내가 가고싶은 청라 맛집 Top 7',
    description: '청라에서 제일 가고싶은 맛집 순위',
    createdDate: '2024-01-15T13:00:05.817Z',
    lastUpdatedDate: '2024-01-20T13:00:05.817Z', // 가장 마지막에 저장된 히스토리의 날짜
    ownerId: '',
    ownerNickname: 'minchi',
    ownerProfileImageUrl: 'https://www.ynow.co.kr/data/photos/20230728/art_16894886847033_93d9b7.png',
    collaborators: [
      // Nullable
      {
        id: 1,
        nickname: 'nabongee',
        profileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
      },
    ],
    items: [
      {
        id: 1,
        rank: 1,
        title: '우리동네쭈꾸미',
        comment: '쭈꾸미 존맛', // Nullable
        link: 'https://naver.me/Gi9EzhJA', // Nullable
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180326_180%2F1522025612368rCHNT_JPEG%2FtR5PurBnequRELzopz7GEM1Z.jpg', // Nullable
      },
      {
        id: 2,
        rank: 2,
        title: '명태어장',
        comment: '명태 존맛집',
        link: 'https://naver.me/GJrF376V',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171107_168%2F1510060558275xNH3k_JPEG%2F_6kwBr6aasuwJKu7m1QGzdvO.jpg',
      },
      {
        id: 3,
        rank: 3,
        title: '한촌설렁탕',
        comment: '설렁탕 맛집',
        link: 'https://naver.me/FzH4YkvZ',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211118_275%2F16372277273592SGLC_JPEG%2FKakaoTalk_20211118_182752353_01.jpg',
      },
      {
        id: 4,
        rank: 4,
        title: '양양입암막국수',
        comment: '막국수 존맛집',
        link: 'https://naver.me/FiLOFLrN',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190617_242%2F1560762962654Ezyom_JPEG%2F6dB5oiAUzHvqsq3j5aDWiG4p.jpg',
      },
      {
        id: 5,
        rank: 5,
        title: '진천토종순대국',
        comment: '순대국 존맛집',
        link: 'https://naver.me/F9QppBBM',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180904_125%2F1536063146640tTQ9B_JPEG%2Fopi3rrEu2yGDbmLTLAjE451c.jpg',
      },
      {
        id: 6,
        rank: 6,
        title: '우리할매떡볶이',
        comment: '떡볶이는 여기서만 먹어',
        link: 'https://naver.me/x50vcmB9',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210517_241%2F16212167904568orwP_JPEG%2FAT_ddo48d0TcgCi1tyyp_sQb.jpg',
      },
      {
        id: 7,
        rank: 7,
        title: '신간짬뽕',
        comment: '간짬뽕 존맛탱',
        link: 'https://naver.me/GWozhL8h',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220218_274%2F1645146029164uJlrY_JPEG%2FKakaoTalk_20220218_091621489.jpg',
      },
    ],
    isCollected: true,
  },
];

export const MOCKDATA_COMMENTS = [
  {
    totalCount: 2,
    comments: [
      {
        id: 1,
        userId: 24,
        userName: '전원우 아내',
        userProfileImageUrl: 'https://img.hankyung.com/photo/202006/03.22990548.1.jpg',
        createdDate: '2024-01-25T06:50:12.962Z',
        content: '전원우 고앵이!',
        replies: [
          {
            id: 3,
            userId: 5,
            userNickName: '나현',
            userProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
            createdDate: '2024-01-25T18:50:12.962Z',
            content: '애기 고양이',
          },
        ],
      },
    ],
  },
  {
    totalCount: 5,
    comments: [
      {
        id: 2,
        userId: 36,
        userName: '승화',
        userProfileImageUrl:
          'https://yt3.googleusercontent.com/mFpxH8XLL_uupbtB1U489iAss84q-Phzdz9hZBZcxtQvlKH292PdCwtfd6Lf6YwCQHbtjvhSCXY=s900-c-k-c0x00ffffff-no-rj',
        createdDate: '2024-01-24T06:50:12.962Z',
        content: '여기 저도 너무 좋아하는 곳들이에요~~',
        replies: [
          {
            id: 3,
            userId: 5,
            userNickName: '나현',
            userProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
            createdDate: '2024-01-25T18:50:12.962Z',
            content: '매니저님~ 혹시 여기 말고 또 추천해주실 카페 있으신가요?~',
          },
          {
            id: 4,
            userId: 36,
            userNickName: '승화',
            userProfileImageUrl:
              'https://yt3.googleusercontent.com/mFpxH8XLL_uupbtB1U489iAss84q-Phzdz9hZBZcxtQvlKH292PdCwtfd6Lf6YwCQHbtjvhSCXY=s900-c-k-c0x00ffffff-no-rj',
            createdDate: '2024-01-26T18:50:12.962Z',
            content: '물론이죠~ 00이라는 카페에 가보세요!!',
          },
        ],
      },
      {
        id: 5,
        userId: 37,
        userName: '유진',
        userProfileImageUrl:
          'https://yt3.googleusercontent.com/mFpxH8XLL_uupbtB1U489iAss84q-Phzdz9hZBZcxtQvlKH292PdCwtfd6Lf6YwCQHbtjvhSCXY=s900-c-k-c0x00ffffff-no-rj',
        createdDate: '2024-01-25T06:50:12.962Z',
        content: '저 더 맛있는 데 알고 있어요~~',
        replies: [
          {
            id: 3,
            userId: 5,
            userNickName: '나현',
            userProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
            createdDate: '2024-01-25T18:50:12.962Z',
            content: '어디에요 당장 공유해주세요',
          },
        ],
      },
    ],
  },
  {
    totalCount: 1,
    comments: [
      {
        id: 2,
        userId: 36,
        userName: '나현',
        userProfileImageUrl: 'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg',
        createdDate: '2024-01-24T06:50:12.962Z',
        content: '털기 성공??',
        replies: null,
      },
    ],
  },
];
