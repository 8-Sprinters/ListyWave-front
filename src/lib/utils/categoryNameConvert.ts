const categoryNameConvert = (korName: string): string | undefined => {
  const nameMap = new Map<string, string>([
    ['문화', 'culture'],
    ['일상생활', 'life'],
    ['장소', 'place'],
    ['음악', 'music'],
    ['영화/드라마', 'movie_drama'],
    ['도서', 'book'],
  ]);

  return nameMap.get(korName);
};

export default categoryNameConvert;
