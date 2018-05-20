import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from "antd-mobile";


class Root extends Component{

  render() {
    return (
      <View style={{ padding: 20,}}>
        <Text>hello react</Text>
        <Button type="primary" onClick={() => alert(1)}>hello antd</Button>
      </View>
    );
  }
}

export default Root;