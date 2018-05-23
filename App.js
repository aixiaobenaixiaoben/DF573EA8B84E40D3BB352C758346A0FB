import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from "axios";
import NetworkAsios from "./src/utils/http/NetworkAsios";

axios.defaults.baseURL = 'https://facebook.github.io/react-native';


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