import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {NewsItemBodyComponent} from './newsItemBody';
import {NewsItemTitleComponent} from './newsItemTitle';

class NewsItemComponent extends React.Component<> {
  render() {
    console.log('RENDER_NEWS_ITEM_' + this.props.itemKey);
    return (
      <View>
        <NewsItemTitleComponent
          title={this.props.item.title}
          itemKey={this.props.itemKey}
        />
        <NewsItemBodyComponent
          body={this.props.item.body}
          itemKey={this.props.itemKey}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  item: state.newsMap[ownProps.itemKey],
});

const mapDispatchToProps = () => ({});

export const NewsItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsItemComponent);
