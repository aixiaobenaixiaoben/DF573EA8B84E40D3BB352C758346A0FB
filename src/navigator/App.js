import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

/** React Navigation (v2)-Fundamentals */

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../img/apple.png')}
        style={{width: 30, height: 30}}
      />
    );
  }
}

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (<Button title="Info" color="#fff" onPress={() => navigation.navigate('MyModal')}/>),
      headerTitle: <LogoTitle/>,
      headerRight: (<Button title="+1" color="#fff" onPress={params.increaseCount}/>),
    };
  };

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: navigation.getParam('otherParam', 'A nested Details Screen'),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          title="Dismiss"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MainStack = StackNavigator (
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
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

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

