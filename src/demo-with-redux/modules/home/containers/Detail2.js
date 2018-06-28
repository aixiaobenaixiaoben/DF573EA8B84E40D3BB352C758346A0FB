/** @flow */
import React, {Component} from "react"
import {Button, Text, View} from "react-native"


class Detail2 extends Component<any, any> {

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>this is Detail 2</Text>
        <Button
          title='go to detail 3'
          onPress={() => this.props.navigation.push('HomeDetail3')}
        />
      </View>
    );
  }
}

export default Detail2;