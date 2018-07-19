import React, {Component} from "react"
import {View} from "react-native"

import style from "./styles/Dot"


class Dot extends Component {

  ref
  lined = false

  shouldComponentUpdate(nextProps, nextState) {
    const { lined = false } = nextProps
    const oldLined = this.lined
    this.lined = lined
    return lined !== oldLined
  }

  componentDidMount() {
    const { id, reportCenter } = this.props
    if (reportCenter !== undefined) {
      setTimeout(() => {
        this.ref.measure( (frameX, frameY, width, height, pageX, pageY) => {
          const radius = 0.5 * width
          const center = {x: frameX + radius, y: frameY + radius}
          reportCenter(id, center, radius)
        })
      }, 0)
    }
  }

  render() {
    const { lined = false, circleStyle, centerStyle, linedCircleStyle, linedCenterStyle } = this.props
    const circleLinedStyle = lined ? [style.circleLined, linedCircleStyle] : []
    const centerLinedStyle = lined ? [style.centerLined, linedCenterStyle] : []

    return (
      <View style={[style.circle, circleStyle, ...circleLinedStyle]} ref={view => this.ref = view}>
        <View style={[style.center, centerStyle, ...centerLinedStyle]}>
        </View>
      </View>
    )
  }

}

export default Dot