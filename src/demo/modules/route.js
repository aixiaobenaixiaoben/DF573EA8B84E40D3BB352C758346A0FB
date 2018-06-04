import React from "react";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import {AppRoute, List} from "./app";
import {HomeRoute, Menu} from "./home";


const RootTab = createBottomTabNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-information-circle${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: '其它',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    lazy: true,
  }
);

const RootStack = createStackNavigator(
  {
    RootTab: {
      screen: RootTab,
      navigationOptions: {
        title: 'Root',
        headerBackTitle: null,
      }
    },
    ...AppRoute,
    ...HomeRoute,
  },
);

export default RootStack;