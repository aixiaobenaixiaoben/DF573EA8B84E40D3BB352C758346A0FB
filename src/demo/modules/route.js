import React from "react";
import {StackNavigator, TabNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import {List, AppRoute} from "./app";
import {Menu, HomeRoute} from "./home";


const RootTab = TabNavigator(
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

const RootStack = StackNavigator(
  {
    RootTab: {
      screen: RootTab,
      navigationOptions: {
        title: 'Root',
      }
    },
    ...AppRoute,
    ...HomeRoute,
  },
);

export default RootStack;