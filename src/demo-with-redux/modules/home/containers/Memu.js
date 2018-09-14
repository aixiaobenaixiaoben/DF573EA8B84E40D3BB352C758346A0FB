/** @flow */
import React, {Component} from "react"
import {View} from "react-native"
import style from "./style"
import SecureTextInput from "./SecureTextInput"


class Menu extends Component<any, any> {

  state = {
    a: '',
    b: '',
  }

  render() {
    const {a, b} = this.state

    return (
      <View style={style.view}>

        <SecureTextInput value={a} placeholder='请输入手机号'
                         style={{marginHorizontal: 20}}
                         onChangeText={(value) => this.setState({a: value})}/>

        <SecureTextInput value={b} placeholder='请输入密码'
                         style={{marginHorizontal: 20}}
                         onChangeText={(value) => this.setState({b: value})}/>

      </View>
    )
  }
}

export default Menu