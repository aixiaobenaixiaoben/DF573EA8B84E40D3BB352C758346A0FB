/** @flow */
import React from "react"
import {createBottomTabNavigator, createStackNavigator} from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

import {app, home, ref, fin, life, my} from "./modules"
import StartView from "./modules/common/containers/Start"
import GuideView from "./modules/common/containers/Guide"

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
      screen: home.HomeMain,
      navigationOptions: {
        title: 'Home',
      }
    },
  },
);

const RefHomeStack = createStackNavigator(
  {
    RefHome: {
      screen: ref.RefMain,
      navigationOptions: {
        title: 'Ref',
      }
    },
  },
);

const FinHomeStack = createStackNavigator(
  {
    RefHome: {
      screen: fin.FinMain,
      navigationOptions: {
        title: 'Fin',
      }
    },
  },
);

const LifeHomeStack = createStackNavigator(
  {
    RefHome: {
      screen: life.LifeMain,
      navigationOptions: {
        title: 'Life',
      }
    },
  },
);

const MyHomeStack = createStackNavigator(
  {
    RefHome: {
      screen: my.MyMain,
      navigationOptions: {
        title: 'My',
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
        title: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcon name={`home${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    RefTab: {
      screen: RefHomeStack,
      navigationOptions: {
        title: '参考',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-list-box${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    FinTab: {
      screen: FinHomeStack,
      navigationOptions: {
        title: '理财',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcon name={`stop-circle${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    LifeTab: {
      screen: LifeHomeStack,
      navigationOptions: {
        title: '生活',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-cafe${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    MyTab: {
      screen: MyHomeStack,
      navigationOptions: {
        title: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <MaterialIcon name={`account${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
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
    start: StartView,
    guide: GuideView,
    RootTab: RootTab,
    app: app.AppRoute,
    home: home.HomeRoute,
    ref: ref.RefRoute,
    fin: fin.FinRoute,
    life: life.LifeRoute,
    my: my.MyRoute,
  },
  {
    headerMode: 'none',
  }
);
