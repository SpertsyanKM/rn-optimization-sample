import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {NewsItem} from '../../components/newsItem';
import {connect} from 'react-redux';
import {loadNews, refreshNews} from '../../../thunkActions';

class NewsScreenComponent extends React.Component<> {
  componentDidMount() {
    this.props.loadNews();
  }

  refresh = () => {
    console.log('--------------[ REFRESHING ]--------------');
    this.props.refreshNews();
  };

  render() {
    console.log('RENDER_NEWS_SCREEN');
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.newsIdList}
          renderItem={({item}) => <NewsItem itemKey={item} />}
          keyExtractor={item => item}
          onRefresh={this.refresh}
          refreshing={false}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  newsIdList: state.newsIdList,
});

const mapDispatchToProps = dispatch => ({
  loadNews: () => {
    dispatch(loadNews());
  },
  refreshNews: () => {
    dispatch(refreshNews());
  },
});

export const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsScreenComponent);
