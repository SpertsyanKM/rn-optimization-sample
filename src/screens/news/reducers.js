import {combineReducers} from 'redux';

const newsMap = (state = {}, action) => {
  if (action.type === 'GOT_NEWS' || action.type === 'GOT_OLDER_NEWS') {
    const initialState = action.type === 'GOT_NEWS' ? {} : state;
    return action.news.reduce((map, item) => {
      map[item.key] = item;
      return map;
    }, initialState);
  }
  return state;
};

const newsIdList = (state = [], action) => {
  if (action.type === 'GOT_NEWS') {
    return action.news.map(item => item.key);
  } else if (action.type === 'GOT_OLDER_NEWS') {
    action.news.forEach(item => state.push(item.key));
    return state;
    // return [...state, ...action.news.map(item => item.key)];
  }
  return state;
};

export const rootReducer = combineReducers({
  newsMap,
  newsIdList,
});
