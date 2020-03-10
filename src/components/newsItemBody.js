import React from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native';

export class NewsItemBody extends React.PureComponent<> {
  render() {
    console.log('RENDER_NEWS_ITEM_BODY_' + this.props.itemKey);
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={Styles.container}>
          <Text style={Styles.text}>{this.props.body}</Text>
        </View>
      </TouchableWithoutFeedback>
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
