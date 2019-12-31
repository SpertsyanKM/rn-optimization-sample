export const getNews = count => {
  const res = [];

  for (let i = count; i > 0; --i) {
    const item = getNewsMock(i);
    res.push(item);
  }

  return res;
};

const getNewsMock = index => ({
  title: 'Заголовок новости №' + index,
  body: 'Тело новости №' + index,
  key: index.toString(),
});
