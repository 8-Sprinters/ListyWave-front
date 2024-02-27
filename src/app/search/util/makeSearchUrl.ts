const makeSearhUrl = ({ keyword, category, sort }: { keyword: string; category: string; sort?: string }) => {
  const searchUrl = '/search?';
  const searchParams = [];

  if (keyword) {
    searchParams.push(`keyword=${keyword}`);
  }

  if (category) {
    searchParams.push(`category=${category}`);
  } else {
    searchParams.push('category=entire');
  }

  if (sort) {
    searchParams.push(`sort=${sort}`);
  }

  return searchUrl + searchParams.join('&');
};

export default makeSearhUrl;
