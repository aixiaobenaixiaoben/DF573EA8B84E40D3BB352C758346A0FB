/** @flow */
import React, {Component} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import style from "./SecureTextInputStyle"
import * as actions from "../actions/Keyboard"
import {connect} from "react-redux"


class SecureTextInput extends Component<any, any> {

  shouldComponentUpdate(nextProps) {
    /** 没有焦点时清空输入内容 */
    if (this.props.inputID !== this.props.keyboardInputID && this.props.value.length > 0 && nextProps.value.length === 0) {
      return true
    }
    /** 焦点变化 */
    if (this.props.keyboardInputID !== nextProps.keyboardInputID) {
      return true
    }
    /** 没有焦点 */
    if (this.props.inputID !== this.props.keyboardInputID) {
      return false
    }
    /** 有焦点并获得键盘输入 */
    if (this.props.inputID === nextProps.keyboardInputID && nextProps.value !== nextProps.keyboardOutput) {
      this.props.onChangeText(nextProps.keyboardOutput)
      return false
    }
    return true
  }

  focus = () => {
    this.props.showKeyboard(this.props.inputID, this.props.value)
  }

  clear = () => {
    if (this.props.inputID === this.props.keyboardInputID) {
      this.props.clearKeyboard()
    } else {
      this.props.onChangeText('')
    }
  }

  render() {
    const {
      inputID,
      value,
      placeholder = '',
      style: inputStyle = {},
      keyboardInputID,
    } = this.props

    let focus = inputID === keyboardInputID

    return (
      <TouchableOpacity onPress={this.focus} style={[style.input, inputStyle]} activeOpacity={1}>
        <Text style={style.inputText}>{value}</Text>
        <View style={[style.inputCursor, focus && {backgroundColor: 'blue'}]}/>
        <Text style={style.inputPlaceholder}>{value.length === 0 && placeholder}</Text>
        <View style={style.inputFill}/>
        <TouchableOpacity onPress={this.clear}>
          <Ionicons name='ios-close-circle' size={20} color='#8C8C8C' style={{paddingTop: 3}}/>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => ({
    keyboardOutput: state.common.keyboard.output,
    keyboardInputID: state.common.keyboard.inputID,
  }),
  dispatch => ({
    showKeyboard: (inputID, output) => dispatch(actions.show(inputID, output)),
    clearKeyboard: () => dispatch(actions.clear()),
  })
)(SecureTextInput)
