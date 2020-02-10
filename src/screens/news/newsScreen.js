import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {NewsItem} from '../../components/newsItem';
import {connect} from 'react-redux';
import {
  isLoadingNextPage,
  loadNews,
  loadNextPage,
  refreshNews,
} from '../../../thunkActions';

class NewsScreenComponent extends React.Component<> {
  componentDidMount() {
    this.props.loadNews();
  }

  refresh = () => {
    console.log('--------------[ REFRESHING ]--------------');
    this.props.refreshNews();
  };

  loadNextPage = () => {
    if (!isLoadingNextPage) {
      console.log('--------------[ LOADING NEXT PAGE ]--------------');
      this.props.loadNextPage();
    }
  };

  render() {
    console.log('RENDER_NEWS_SCREEN');
    const idList = this.props.newsIdList;
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.newsIdList}
          renderItem={({item}) => <NewsItem itemKey={item} />}
          keyExtractor={item => item}
          onRefresh={this.refresh}
          onEndReached={this.loadNextPage}
          refreshing={false}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  newsIdList: state.newsIdList,
  newsMap: state.newsMap,
});

const mapDispatchToProps = dispatch => ({
  loadNews: () => {
    dispatch(loadNews());
  },
  refreshNews: () => {
    dispatch(refreshNews());
  },
  loadNextPage: () => {
    dispatch(loadNextPage());
  },
});

export const NewsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsScreenComponent);
