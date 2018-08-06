/** @flow */
import Detail from "./containers/Detail"
import {createStackNavigator} from "react-navigation"


export const MovieRoute = createStackNavigator(
  {
    AppDetail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detail',
      }
    },
  }
);
