import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class NewsItemBodyComponent extends React.PureComponent<> {
  render() {
    console.log('RENDER_NEWS_ITEM_BODY_' + this.props.itemKey);
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>{this.props.body}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 12,
  },
});
