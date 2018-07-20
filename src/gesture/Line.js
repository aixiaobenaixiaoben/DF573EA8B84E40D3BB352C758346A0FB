import React, {Component} from "react"
import {View, ViewPropTypes} from "react-native"
import PropTypes from "prop-types"

import style from "./styles/Line"
import {angleOfPoint, distanceOfPoint, vectorOfPoint} from "./Utils"


class Line extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const {tail} = nextProps
    return !tail
  }

  render() {
    const {start, end, style: propStyle} = this.props
    const len = distanceOfPoint(start, end)
    const angle = angleOfPoint(start, end)
    const vector = vectorOfPoint(start, end)

    const lineStyle = {
      width: len,
      left: start.x,
      top: start.y,
      transform: [
        {translateX: vector.x},
        {translateY: vector.y},
        {rotate: `${angle}deg`},
      ],
    }

    return (
      <View style={[style.view, lineStyle, propStyle]}>
      </View>
    )
  }
}

Line.propTypes = {
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  style: ViewPropTypes.style,
}

export default Line