/** @flow */
import React, {Component} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import style from "./style"
import Ionicons from "react-native-vector-icons/Ionicons"
import Keyboard from "./Keyboard"


class Menu extends Component<any, any> {

  timer: any

  state = {
    visible: false,
    flicker: false,
    input: '',
  }

  open = () => {
    this.setState({visible: true})
    this.timer = setInterval(() => {
      this.setState({flicker: !this.state.flicker})
    }, 500)
  }

  close = () => {
    clearInterval(this.timer)
    this.setState({visible: false, flicker: false})
  }

  press = (key: string) => {
    let {input} = this.state
    if (key !== 'SPACE') {
      input += key
      this.setState({input})
    }
  }

  delete = () => {
    let {input} = this.state
    input = input.substring(0, input.length - 1)
    this.setState({input})
  }

  render() {
    const {visible, flicker, input} = this.state

    return (
      <View>
        <TouchableOpacity onPress={this.open} style={style.input} activeOpacity={1}>
          <Text style={style.inputText}>{input}</Text>
          <View style={[style.inputCursor, visible && flicker && {backgroundColor: 'blue'}]}/>
          <Text style={style.inputPlaceholder}>{input.length === 0 && 'placeholder'}</Text>
          <View style={style.inputFill}/>
          <TouchableOpacity onPress={() => this.setState({input: ''})}>
            <Ionicons name='ios-close-circle' size={20} color='#8C8C8C' style={{paddingTop: 3}}/>
          </TouchableOpacity>
        </TouchableOpacity>

        <Keyboard
          visible={visible}
          close={this.close}
          press={this.press}
          delete={this.delete}
        />
      </View>
    )
  }
}

export default Menu