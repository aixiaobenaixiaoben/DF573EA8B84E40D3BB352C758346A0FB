/** @flow */
import React, {Component} from "react"
import {Button, View} from "react-native"


class Menu extends Component<any, any> {

  openDetail = (route: string) => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={{padding: 20}}>
        <Button
          title='go to detail 1'
          onPress={() => this.openDetail('HomeDetail1')}
        />
        <Button
          title='go to detail 2'
          onPress={() => this.openDetail('HomeDetail2')}
        />
        <Button
          title='go to detail 3'
          onPress={() => this.openDetail('HomeDetail3')}
        />
      </View>
    );
  }
}

export default Menu;