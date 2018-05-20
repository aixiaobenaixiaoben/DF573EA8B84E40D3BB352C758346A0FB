import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {DrawerNavigator} from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

/** Drawer navigation */

class HomeScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>This is Home</Text>
        <Button
          title='Open Drawer'
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}

class SecondScreen extends Component{
  render() {
    return (
      <View style={styles.screen}>
        <Text>This is Second</Text>
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.openDrawer()}
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

const RootDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
          <FontAwesome name='apple' size={30} color={tintColor}/>
        ),
      }
    },
    Second: {
      screen: SecondScreen,
      navigationOptions: {
        drawerLabel: 'Second',
        drawerIcon: ({tintColor}) => (
          <FontAwesome name='twitter' size={30} color={tintColor}/>
        ),
      }
    },
  }
);

export default RootDrawer;