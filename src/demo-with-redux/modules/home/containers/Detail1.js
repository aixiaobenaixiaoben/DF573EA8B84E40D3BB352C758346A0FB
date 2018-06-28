/** @flow */
import React, {Component} from "react"
import {Button, Text, View} from "react-native"


class Detail1 extends Component<any, any> {

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>this is Detail 1</Text>
        <Button
          title='go to detail 2'
          onPress={() => this.props.navigation.push('HomeDetail2')}
        />
      </View>
    );
  }
}

export default Detail1;