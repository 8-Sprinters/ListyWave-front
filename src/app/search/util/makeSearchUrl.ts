const makeSearhUrl = ({ keyword, categoryCode, sort }: { keyword: string; categoryCode: string; sort?: string }) => {
  const searchUrl = '/search?';
  const searchParams = [];

  if (keyword) {
    searchParams.push(`keyword=${keyword}`);
  }

  if (categoryCode) {
    searchParams.push(`categoryCode=${categoryCode}`);
  } else {
    searchParams.push('category=entire');
  }

  if (sort) {
    searchParams.push(`sort=${sort}`);
  }

  return searchUrl + searchParams.join('&');
};

export default makeSearhUrl;
