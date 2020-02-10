export const getNews = (from, count) => {
  const res = [];

  for (let i = from; i < from + count; ++i) {
    const item = getNewsMock(i);
    res.push(item);
  }

  return res;
};

export const getNewsAsync = async (from, count) => {
  const res = getNews(from, count);
  await sleep(2000);
  return res;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getNewsMock = index => ({
  title: 'Заголовок новости №' + index,
  body: `Тело новости №${index}\n`.repeat(20),
  key: index.toString(),
});
