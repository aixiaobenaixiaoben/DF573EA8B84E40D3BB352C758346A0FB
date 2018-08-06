/** @flow */
import Detail1 from "./containers/Detail1"
import Detail2 from "./containers/Detail2"
import Detail3 from "./containers/Detail3"
import {createStackNavigator} from "react-navigation"


export const HomeRoute = createStackNavigator(
  {
    HomeDetail1: {
      screen: Detail1,
      navigationOptions: {
        title: 'Detail1',
      }
    },
    HomeDetail2: {
      screen: Detail2,
      navigationOptions: {
        title: 'Detail2',
      }
    },
    HomeDetail3: {
      screen: Detail3,
      navigationOptions: {
        title: 'Detail3',
      }
    },
  }
)
