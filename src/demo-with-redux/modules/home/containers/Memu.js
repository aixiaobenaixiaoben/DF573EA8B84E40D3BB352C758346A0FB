/** @flow */
import React, {Component} from "react"
import {Button, View} from "react-native"


class Menu extends Component<any, any> {

  render() {
    return (
      <View style={{padding: 20}}>
        <Button
          title='go to detail 1'
          onPress={() => this.props.navigation.navigate('HomeDetail1')}
        />
      </View>
    );
  }
}

export default Menu;