import {getNews, getNewsAsync} from './src/screens/news/data';

const PAGE_SIZE = 10;

export function loadNews() {
  return dispatch => {
    const news = getNews(1, PAGE_SIZE);
    dispatch({type: 'GOT_NEWS', news});
  };
}

export function refreshNews() {
  return dispatch => {
    const news = getNews(1, PAGE_SIZE);
    dispatch({type: 'GOT_NEWS', news});
  };
}

export let isLoadingNextPage = false;
export function loadNextPage() {
  return async (dispatch, getState) => {
    const state = getState();
    isLoadingNextPage = true;
    const news = await getNewsAsync(state.newsIdList.length + 1, PAGE_SIZE);
    dispatch({type: 'GOT_OLDER_NEWS', news});
    isLoadingNextPage = false;
  };
}
