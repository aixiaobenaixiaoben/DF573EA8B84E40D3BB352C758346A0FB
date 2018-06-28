/** @flow */
import React, {Component} from "react"
import {Button, Text, View} from "react-native"


class Detail3 extends Component<any, any> {

  render() {
    return (
      <View style={{padding: 20}}>
        <Text>this is Detail 3</Text>
        <Button
          title='go to detail 1'
          onPress={() => this.props.navigation.navigate('HomeDetail1')}
        />
      </View>
    );
  }
}

export default Detail3;