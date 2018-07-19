import React, {Component} from "react"
import {View} from "react-native"
import style from "./styles/Pad"
import Dot from "./Dot"
import {DIMENSION_PAD_HEIGHT, DIMENSION_PAD_WIDTH} from "./Constants"

class Pad extends Component {

  handle = (sequence, points) => {
    let chars = sequence.split('')
    for (let char of chars) {
      let key = String.fromCharCode(64 + parseInt(char))
      points[key] = true
    }
  }

  render() {
    const {
      width = DIMENSION_PAD_WIDTH,
      height = DIMENSION_PAD_HEIGHT,
      sequence = '',
    } = this.props

    let points = {}
    this.handle(sequence, points)

    return (
      <View style={{width: width, height: height}}>
        <View style={style.row}>
          <Dot lined={points.A} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.B} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.C} circleStyle={style.circle} centerStyle={style.center}/>
        </View>
        <View style={style.row}>
          <Dot lined={points.D} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.E} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.F} circleStyle={style.circle} centerStyle={style.center}/>
        </View>
        <View style={style.row}>
          <Dot lined={points.G} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.H} circleStyle={style.circle} centerStyle={style.center}/>
          <Dot lined={points.I} circleStyle={style.circle} centerStyle={style.center}/>
        </View>
      </View>
    )
  }
}

export default Pad