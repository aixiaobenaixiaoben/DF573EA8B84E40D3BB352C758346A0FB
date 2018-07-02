import {StyleSheet} from "react-native"
import {COLOR, COLOR_BACKGROUND, FONT_1} from "../../Constants"


export default StyleSheet.create({
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: COLOR,
  },
  touchText: {
    color: COLOR_BACKGROUND,
    fontSize: FONT_1,
  },
  disable: {
    opacity: 0.6,
  }
});