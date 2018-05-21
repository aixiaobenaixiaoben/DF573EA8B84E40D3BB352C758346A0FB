import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';


export class TextOnPlatform extends Component{

  render() {
    return (
      <View style={{ padding: 20, }}>
        <Text style={{ color: 'red', }}>
          {JSON.stringify(Platform)}
        </Text>
      </View>
    );
  }
}