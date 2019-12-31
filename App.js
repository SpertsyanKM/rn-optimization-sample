import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './src/screens/news/reducers';
import {NewsScreen} from './src/screens/news/newsScreen';

const state = {
  newsMap: {},
  newsIdList: [],
};

class App extends React.Component<> {
  constructor(props) {
    super(props);

    const store = createStore(
      rootReducer,
      state,
      applyMiddleware(thunkMiddleware),
    );
    this.state = {store};
  }

  render() {
    const {store} = this.state;
    return (
      <Provider store={store}>
        <NewsScreen />
      </Provider>
    );
  }
}

export default App;
