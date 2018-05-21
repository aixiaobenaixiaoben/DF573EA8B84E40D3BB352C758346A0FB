import React, {Component} from 'react';
import {View} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Root extends Component{

  render() {
    return (
      <View style={{ padding: 20 }}>
        <FontAwesome name='apple' size={100} color='black'/>
      </View>
    );
  }
}

export default Root;