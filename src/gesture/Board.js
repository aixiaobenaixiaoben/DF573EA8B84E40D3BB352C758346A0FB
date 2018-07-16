import React, {Component} from "react"
import {PanResponder, View} from "react-native"

import Line from "./Line"
import style from "./styles/Board"
import Dot from "./Dot"
import type {Point} from "./Constants"
import {CLEAR_TIME, DIMENSION_HEIGHT, DIMENSION_WIDTH} from "./Constants"
import {distanceOfPoint} from "./Utils"

class Board extends Component {

  state = {
    start: {x: 0, y: 0},
    current: {x: 0, y: 0},
    points: {A: {}, B: {}, C: {}, D: {}, E: {}, F: {}, G: {}, H: {}, I: {}},
    lines: [],
  }

  width
  height
  _panResponder
  ref
  pageX
  pageY
  sequence = ''

  constructor(props: any) {
    super(props)

    const { width = DIMENSION_WIDTH, height = DIMENSION_HEIGHT} = this.props
    this.width = width
    this.height = height

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {
        this.onMove(evt)
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({current: this.state.start})
        this.onFinishDraw()
      },
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.ref.measure( (frameX, frameY, width, height, pageX, pageY) => {
        this.pageX = pageX
        this.pageY = pageY
      })
    }, 0)
  }

  onMove = (event) => {
    let current = {
      x: event.nativeEvent.pageX - this.pageX,
      y: event.nativeEvent.pageY - this.pageY,
    }
    if (current.x < 0 || current.x > this.width || current.y < 0 || current.y > this.height) {
      return
    }

    let { start, points, lines } = this.state
    for (let id in points) {
      let point = points[id]
      if (!point.lined) {
        const lined = distanceOfPoint(current, point.center) <= point.radius
        if (lined) {
          point.lined = true
          start = point.center
          this.sequence += id.charCodeAt() - 64

          /** create line */
          if (lines.length > 0) {
            lines[lines.length - 1].end = point.center
          }
          let line = {id, start: point.center}
          lines.push(line)
        }
      }
    }

    if (lines.length > 0) {
      this.setState({start, current, points, lines})
    }
  }

  onFinishDraw = () => {
    setTimeout(() => {
      let origin = {x: 0, y: 0}
      const { points } = this.state
      for (let id in points) {
        points[id].lined = false
      }
      this.setState({
        start: origin,
        current: origin,
        points,
        lines: [],
      })
      this.sequence = ''
    }, CLEAR_TIME)
  }

  renderLines = () => {
    let elements = []
    const { lines } = this.state
    for (let line of lines) {
      if (line.end !== undefined) {
        elements.push(<Line tail key={line.id} start={line.start} end={line.end}/>)
      }
    }
    return elements
  }

  reportCenter = (id: string, center: Point, radius: number) => {
    if (['D', 'E', 'F'].indexOf(id) !== -1) {
      center.y += this.height / 3
    }
    if (['G', 'H', 'I'].indexOf(id) !== -1) {
      center.y += this.height * 2 / 3
    }
    const { points } = this.state
    points[id] = {
      center: center,
      radius: radius,
      lined: false,
    }
    this.setState({points})
  }

  render() {
    const { A , B, C, D, E, F, G, H, I }  = this.state.points
    const propStyle = {
      width: this.width,
      height: this.height,
    }
    return (
      <View {...this._panResponder.panHandlers} style={[propStyle]} ref={view => this.ref = view}>
        { this.renderLines() }
        <Line start={this.state.start} end={this.state.current}/>
        <View style={style.row}>
          <Dot id='A' lined={A.lined} reportCenter={this.reportCenter}/>
          <Dot id='B' lined={B.lined} reportCenter={this.reportCenter}/>
          <Dot id='C' lined={C.lined} reportCenter={this.reportCenter}/>
        </View>
        <View style={style.row}>
          <Dot id='D' lined={D.lined} reportCenter={this.reportCenter}/>
          <Dot id='E' lined={E.lined} reportCenter={this.reportCenter}/>
          <Dot id='F' lined={F.lined} reportCenter={this.reportCenter}/>
        </View>
        <View style={style.row}>
          <Dot id='G' lined={G.lined} reportCenter={this.reportCenter}/>
          <Dot id='H' lined={H.lined} reportCenter={this.reportCenter}/>
          <Dot id='I' lined={I.lined} reportCenter={this.reportCenter}/>
        </View>
      </View>
    )
  }
}

export default Board