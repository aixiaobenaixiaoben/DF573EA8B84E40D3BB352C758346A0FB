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
    setTimeout(() => {
      this.ref.measure( (frameX, frameY, width, height, pageX, pageY) => {
        const radius = 0.5 * width
        const center = {x: frameX + radius, y: frameY + radius}
        const { id, reportCenter } = this.props
        reportCenter(id, center, radius)
      })
    }, 0)
  }

  render() {
    const { lined = false } = this.props
    const viewLinedStyle = lined ? style.viewLined : {}
    const centerLinedStyle = lined ? style.centerLined : {}

    return (
      <View style={[style.view, viewLinedStyle]} ref={view => this.ref = view}>
        <View style={[style.center, centerLinedStyle]}>
        </View>
      </View>
    )
  }

}

export default Dot