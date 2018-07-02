/** @flow */
import {Dimensions, StyleSheet} from "react-native"
import {COLOR_BLACK_06, COLOR_WHITE} from "../../Constants"

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  imageBack: {
    width: width,
    height: height,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    right: 10,
    bottom: 40,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    backgroundColor: COLOR_BLACK_06,
    opacity: 0.8,
  }

})