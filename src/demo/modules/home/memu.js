import React, {Component} from "react";
import {View, Button} from "react-native";


class Menu extends Component {

  render() {
    return (
      <View style={{padding: 20}}>
        <Button
          title='go to detail 1'
          onPress={() => {
            this.props.navigation.navigate('HomeDetail1')
          }}
        />
        <Button
          title='go to detail 2'
          onPress={() => {
            this.props.navigation.navigate('HomeDetail2')
          }}
        />
        <Button
          title='go to detail 3'
          onPress={() => {
            this.props.navigation.navigate('HomeDetail3')
          }}
        />
      </View>
    );
  }
}

export default Menu;