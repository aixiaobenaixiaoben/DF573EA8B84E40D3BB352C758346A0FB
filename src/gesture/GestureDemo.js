import React, {Component} from "react"
import {StyleSheet, View} from "react-native"
import {Gesture, GesturePad} from "../gesture"


class GestureDemo extends Component {

  onTouch = () => {
    console.log('touch')
  }

  onRelease = (sequence) => {
    console.log('release')
  }

  onClear = (sequence) => {
    console.log('clear')
  }

  render() {
    return (
      <View style={style.view}>

        <GesturePad
          width={200}
          height={200}
          sequence={'2479'}
          circleStyle={style.circleStyle}
          centerStyle={style.centerStyle}
          linedCircleStyle={style.linedCircleStyle}
          linedCenterStyle={style.linedCenterStyle}
        />

        <Gesture
          width={300}
          height={300}
          clearTime={100}
          onTouch={this.onTouch}
          onRelease={this.onRelease}
          onClear={this.onClear}
          lineStyle={style.lineStyle}
          circleStyle={style.circleStyle}
          centerStyle={style.centerStyle}
          linedCircleStyle={style.linedCircleStyle}
          linedCenterStyle={style.linedCenterStyle}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  view: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
  circleStyle: {
    // backgroundColor: 'red',
  },
  centerStyle: {
    // backgroundColor: 'red',
  },
  linedCircleStyle: {
    // backgroundColor: 'yellow',
  },
  linedCenterStyle: {
    // backgroundColor: 'green',
  },
  lineStyle: {
    // backgroundColor: 'red',
  },
})

export default GestureDemo
