import {StyleSheet} from "react-native"

export default StyleSheet.create({
  input: {
    borderWidth: 1, borderColor: 'green',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputCursor: {
    height: 25,
    width: 2,
  },
  inputText: {
    fontSize: 18,
  },
  inputPlaceholder: {
    fontSize: 18,
    color: 'gray',
  },
  inputFill: {
    flex: 1,
  },
})