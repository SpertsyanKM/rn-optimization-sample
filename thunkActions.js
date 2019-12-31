import {getNews} from './src/screens/news/data';

export function loadNews() {
  return dispatch => {
    const news = getNews(3);
    dispatch({type: 'GOT_NEWS', news});
  };
}

export function refreshNews() {
  return (dispatch, getState) => {
    const state = getState();
    const news = getNews(state.newsIdList.length + 1);
    dispatch({type: 'GOT_NEWS', news});
  };
}
