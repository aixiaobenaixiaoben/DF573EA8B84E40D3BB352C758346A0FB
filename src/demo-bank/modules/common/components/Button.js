import React, {Component} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import PropTypes from "prop-types"

import defaultStyle from "./styles/Button"


class Button extends Component {

  press = () => {
    this.props.onPress()
  }

  render() {

    const {
      disabled = false,
      executing = false,
      executingText = '执行中',
      text = 'Button',
      style = defaultStyle.touch,
      textStyle = defaultStyle.touchText
    } = this.props

    const title = executing ? executingText : text
    const disable = executing || disabled
    const disableStyle = disable ? defaultStyle.disable : {}

    return (
      <View>
        <TouchableOpacity onPress={this.press} style={[style, disableStyle]} activeOpacity={0.6} disabled={disable}>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  executing: PropTypes.bool,
  executingText: PropTypes.string,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style,
}

export default Button;