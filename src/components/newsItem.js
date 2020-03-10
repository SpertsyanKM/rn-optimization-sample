import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {NewsItemBody} from './newsItemBody';
import {NewsItemTitle} from './newsItemTitle';

function NewsItemComponent(props) {
  console.log('RENDER_NEWS_ITEM_' + props.itemKey);
  const {itemKey, onBodyPress} = props;
  const onPressBody = useCallback(() => onBodyPress(itemKey), [
    itemKey,
    onBodyPress,
  ]);
  return (
    <View>
      <NewsItemTitle title={props.item.title} itemKey={itemKey} />
      <NewsItemBody
        body={props.item.body}
        onPress={onPressBody}
        itemKey={itemKey}
      />
    </View>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: state.newsMap[ownProps.itemKey],
});

const mapDispatchToProps = () => ({});

export const NewsItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsItemComponent);
