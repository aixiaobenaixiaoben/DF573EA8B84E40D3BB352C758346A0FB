import {Dimensions, StyleSheet} from "react-native"

const {width} = Dimensions.get('window')
const keyWidth = 0.1 * (width - 66)

export default StyleSheet.create({
  mask: {
    flex: 1,
  },
  keyboard: {
    backgroundColor: '#212121',
  },
  keyboardTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  keyboardTitleLeft: {
    width: 60,
  },
  keyboardTitleMiddle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C8C8C',
  },
  keyboardTitleRight: {
    width: 60,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#578EDC',
  },
  row: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 3,
  },
  rowSpace: {
    paddingVertical: 2,
  },
  rowPaddingLeft: {
    paddingLeft: 0.5 * keyWidth + 3,
  },
  rowPaddingRight: {
    paddingRight: 0.5 * keyWidth + 3,
  },
  key: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383838',
    margin: 3,
    borderRadius: 5,
  },
  keyLeft: {
    flex: null,
    marginRight: 10,
    width: 0.5 * width - 3.5 * keyWidth - 40,
  },
  keyRight: {
    flex: null,
    marginLeft: 10,
    width: 0.5 * width - 3.5 * keyWidth - 40,
  },
  keyBig: {
    flex: null,
    width: 0.5 * width - 2.5 * keyWidth - 25,
  },
  keyPress: {
    backgroundColor: '#565656',
  },
  keyText: {
    color: '#FFFFFF',
    fontSize: 28,
  },
  keyTextBold: {
    fontWeight: 'bold',
  },
  keyPressText: {
    fontSize: 26,
  },
  keyShiftText: {
    fontSize: 18,
  },
  keyShiftSmallText: {
    fontSize: 16,
  },
})