import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import {TabNavigator, StackNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

/** Tab navigation */

class DetailScreen extends Component{
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
        <Button
          title='Drawer'
          onPress={this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}

class HomeScreen extends Component{
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <Button
          title='Go to Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack= StackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
});

const SettingsStack= StackNavigator({
  Settings: SettingsScreen,
  Details: DetailScreen,
});

export default TabNavigator(
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


