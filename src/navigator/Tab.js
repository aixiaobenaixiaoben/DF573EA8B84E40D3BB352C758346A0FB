import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

/** Tab navigation */

class DetailScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class AboutScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>About!</Text>
      </View>
    );
  }
}

class HomeScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>Home!</Text>
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>Settings!</Text>
        <Button
          title='Go to About'
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const RootTab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <Ionicons name={`ios-information-circle${focused ? '' : '-outline'}`} size={25} color={tintColor}/>
        ),
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: '设置',
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

const Root = StackNavigator(
  {
    Main: {
      screen: RootTab,
      navigationOptions: {
        title: 'RootTab',
      }
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'DetailScreen',
      }
    },
    About: {
      screen: AboutScreen,
      navigationOptions: ({navigation}) => ({
        title: 'AboutScreen',
        headerLeft: <Button title="Back" onPress={() => navigation.pop()}/>,
      })
    },
  },
);

export default Root;
