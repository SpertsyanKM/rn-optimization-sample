import {combineReducers} from 'redux';

const newsMap = (state = {}, action) => {
  if (action.type === 'GOT_NEWS') {
    return action.news.reduce((map, item) => {
      map[item.key] = item;
      return map;
    }, {});
  }
  return state;
};

const newsIdList = (state = {}, action) => {
  if (action.type === 'GOT_NEWS') {
    return action.news.map(item => item.key);
  }
  return state;
};

export const rootReducer = combineReducers({
  newsMap,
  newsIdList,
});
