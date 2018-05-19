import React, {Component} from 'react';
import {View} from 'react-native';
import {Calculator} from './src/react/Calculator';


class Root extends Component{

  render() {
    return (
      <View style={{ padding: 20,}}>
        <Calculator/>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return <Root/>;
  }
}