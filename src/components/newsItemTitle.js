import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class NewsItemTitle extends React.Component<> {
  render() {
    // console.log('RENDER_NEWS_ITEM_TITLE_' + this.props.itemKey);
    return (
      <View>
        <Text style={Styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 12,
  },
});
