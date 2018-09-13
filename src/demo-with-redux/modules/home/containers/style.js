import {StyleSheet} from "react-native"


export default StyleSheet.create({
  view: {
    borderWidth: 4, borderColor: 'blue',
    flex: 1,
  },
  input: {
    borderWidth: 1, borderColor: 'green',
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cursor: {
    height: 40,
    width: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 18,
  },
  text2: {
    fontSize: 18,
    color: 'gray',
  },
  keyboard: {
    borderWidth: 4, borderColor: 'green',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  mask: {
    borderWidth: 4, borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})