/** @flow */
import React, {Component} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import style from "./SecureTextInputStyle"
import Ionicons from "react-native-vector-icons/Ionicons"
import Keyboard from "./Keyboard"


class SecureTextInput extends Component<any, any> {

  timer: any

  state = {
    visible: false,
    flicker: false,
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
    if (key !== 'SPACE') {
      this.props.onChangeText(this.props.value + key)
    }
  }

  delete = () => {
    let value = this.props.value
    this.props.onChangeText(value.substring(0, value.length - 1))
  }

  clear = () => {
    this.props.onChangeText('')
  }

  render() {
    const {visible, flicker} = this.state
    const {value, placeholder = '', style: inputStyle = {}} = this.props

    return (
      <View>
        <TouchableOpacity onPress={this.open} style={[style.input, inputStyle]} activeOpacity={1}>
          <Text style={style.inputText}>{value}</Text>
          <View style={[style.inputCursor, visible && flicker && {backgroundColor: 'blue'}]}/>
          <Text style={style.inputPlaceholder}>{value.length === 0 && placeholder}</Text>
          <View style={style.inputFill}/>
          <TouchableOpacity onPress={this.clear}>
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

export default SecureTextInput