/** @flow */
import React from "react"
import {createBottomTabNavigator, createStackNavigator} from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"

import {app, home, ref} from "./modules"

const AppHomeStack = createStackNavigator(
  {
    AppHome: {
      screen: app.AppHome,
      navigationOptions: {
        title: '电影库',
      }
    },
  },
);

const HomeHomeStack = createStackNavigator(
  {
    HomeHome: {
      screen: home.HomeView,
      navigationOptions: {
        title: '音乐库',
      }
    },
  },
);

const RefHomeStack = createStackNavigator(
  {
    RefHome: {
      screen: ref.RefHome,
      navigationOptions: {
        title: 'ANT-DESIGN-RN',
      }
    },
  },
);

const RootTab = createBottomTabNavigator(
  {
    AppTab: {
      screen: AppHomeStack,
      navigationOptions: {
        title: '电影',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-american-football${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    HomeTab: {
      screen: HomeHomeStack,
      navigationOptions: {
        title: '音乐',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-paper-plane${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    RefTab: {
      screen: RefHomeStack,
      navigationOptions: {
        title: '🐜',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-leaf${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
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

export default createStackNavigator(
  {
    RootTab: RootTab,
    app: app.AppRoute,
    home: home.HomeRoute,
    ...ref.RefRoute,
  },
  {
    headerMode: 'none',
  }
);
