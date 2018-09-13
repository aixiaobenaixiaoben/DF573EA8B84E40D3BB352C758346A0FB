/** @flow */
import React, {Component} from "react"
import {Modal, Text, TouchableOpacity, View} from "react-native"
import style from "./style"


class Menu extends Component<any, any> {

  state = {
    visible: false
  }

  open = () => {
    this.setState({visible: true})
  }

  close = () => {
    this.setState({visible: false})
  }

  render() {
    const {visible} = this.state

    return (
      <View style={style.view}>

        <View style={style.input}>
          <Text style={style.text}>192</Text>
          <View style={style.cursor}/>
          <Text style={style.text2}>placeholder</Text>
        </View>

        <TouchableOpacity onPress={this.open}>
          <Text>open</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
        >
          <TouchableOpacity onPress={this.close} style={style.mask}/>

          <View style={style.keyboard}>
            <TouchableOpacity onPress={this.close}>
              <Text>close</Text>
            </TouchableOpacity>
          </View>

        </Modal>

      </View>
    )
  }
}

export default Menu