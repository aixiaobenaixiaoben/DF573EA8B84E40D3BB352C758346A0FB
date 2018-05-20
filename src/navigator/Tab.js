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
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Details')}
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

const HomeStack= StackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
});

const SettingsStack= StackNavigator({
  Settings: SettingsScreen,
  Details: DetailScreen,
});

const RootTab = TabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default RootTab;
