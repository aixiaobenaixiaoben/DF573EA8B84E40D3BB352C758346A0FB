/** @flow */
import React, {Component} from "react"
import {ScrollView, TextInput, Text} from "react-native"
import style from "./style"
import SecureTextInput from "../../common/containers/SecureTextInput"


class Menu extends Component<any, any> {

  state = {
    a: '',
    b: '',
  }

  render() {
    const {a, b} = this.state

    return (
      <ScrollView keyboardShouldPersistTaps='handled'>

        <SecureTextInput inputID='HOME-MENU-INPUT-MOBILE' value={a} placeholder='请输入手机号'
                         style={{marginHorizontal: 20}}
                         onChangeText={(value) => this.setState({a: value})}/>

        <SecureTextInput inputID='HOME-MENU-INPUT-PASSWORD' value={b} placeholder='请输入密码'
                         style={{marginHorizontal: 20}}
                         onChangeText={(value) => this.setState({b: value})}/>

        <TextInput style={style.input}/>
        <Text style={style.text}>{a}</Text>
        <Text style={style.text}>{b}</Text>
      </ScrollView>
    )
  }
}

export default Menu