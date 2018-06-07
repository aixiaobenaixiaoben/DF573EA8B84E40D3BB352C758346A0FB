import React from "react";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import {app, home} from "./modules";


const RootTab = createBottomTabNavigator(
  {
    List: {
      screen: app.List,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-information-circle${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    Menu: {
      screen: home.Menu,
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

export default createStackNavigator(
  {
    RootTab: {
      screen: RootTab,
      navigationOptions: {
        title: 'Root',
        headerBackTitle: null,
      }
    },
    ...app.AppRoute,
    ...home.HomeRoute,
  },
);
