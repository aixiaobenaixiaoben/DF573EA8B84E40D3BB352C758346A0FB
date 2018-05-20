import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";

/** Stack navigation */
/** React Navigation (v2)-Fundamentals */

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  componentWillMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  render() {
    let param = {
      itemId: 82,
      otherParam: 'Anything you want here',
    };

    return (
      <View style={styles.screen}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.navigate('Details', param)}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={styles.screen}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to details...again"
          onPress={() => this.props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          title="Dismiss"
          onPress={() => this.props.navigation.goBack()}
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

const MainStack = StackNavigator (
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => {
        const params = navigation.state.params || {};
        return {
          headerLeft: <Button title="Info" color="#fff" onPress={() => navigation.navigate('MyModal')}/>,
          headerTitle: <FontAwesome name='apple' size={30} color='black'/>,
          headerRight: <Button title="+1" color="#fff" onPress={() => params.increaseCount()}/>,
        };
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({navigation, navigationOptions}) => {
        return {
          title: navigation.getParam('otherParam', 'A nested Details Screen'),
          headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
          },
          headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      }
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator (
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default RootStack;

