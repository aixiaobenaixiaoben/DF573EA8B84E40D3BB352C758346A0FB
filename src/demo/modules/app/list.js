import React, {Component} from "react";
import {View, Button} from "react-native";


class List extends Component {

  render() {
    return (
      <View style={{padding: 20}}>
        <Button title='go to detail' onPress={() => {
          this.props.navigation.navigate('AppDetail')
        }}/>
      </View>
    );
  }
}

export default List;