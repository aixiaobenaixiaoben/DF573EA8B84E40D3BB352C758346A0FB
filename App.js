import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NetworkAsios from "./src/native/NetworkAsios";


class Root extends Component{

  render() {
    return (
      <View style={{ padding: 20,}}>
        <Text>hello react</Text>
        <NetworkAsios/>
      </View>
    );
  }
}

export default Root;