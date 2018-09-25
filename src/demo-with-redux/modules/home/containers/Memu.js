/** @flow */
import React, {Component} from "react"
import {ScrollView} from "react-native"
import style from "./style"


class Menu extends Component<any, any> {

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={style.scrollView} style={style.view}>


      </ScrollView>
    )
  }
}

export default Menu