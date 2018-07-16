import React, {Component} from "react"
import {StyleSheet, View} from "react-native"

import Board from "./Board"

class Gesture extends Component {

  render() {
    return (
      <View style={style.view}>
        <Board/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'blue',
  }
})

export default Gesture
