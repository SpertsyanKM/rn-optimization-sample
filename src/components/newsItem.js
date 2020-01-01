import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {NewsItemBody} from './newsItemBody';
import {NewsItemTitle} from './newsItemTitle';

class NewsItemComponent extends React.Component<> {
  render() {
    console.log('RENDER_NEWS_ITEM_' + this.props.itemKey);
    return (
      <View>
        <NewsItemTitle
          title={this.props.item.title}
          itemKey={this.props.itemKey}
        />
        <NewsItemBody
          style={[styles.body, styles.item]}
          body={this.props.item.body}
          onPress={this.props.expandBody}
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

const styles = StyleSheet.create({
  body: {},
  item: {},
});

export const NewsItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsItemComponent);
