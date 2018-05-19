import React, {Component} from "react";
import {View, Text, Button} from "react-native";

/** 条件渲染 */

function UserGreeting(props) {
  return <Text>Welcome back!</Text>;
}

function GuestGreeting(props) {
  return <Text>Please sign up.</Text>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

class LoginButton extends Component{
  render() {
    return (
      <Button title='Login' onPress={this.props.onPress}/>
    );
  }
}

class LogoutButton extends Component{
  render() {
    return (
      <Button title='Logout' onPress={this.props.onPress}/>
    );
  }
}

class LoginLabel extends Component{
  render() {
    return this.props.isLoggedIn ? (<Text>This is a Label only when login.</Text>) : null;
  }
}


export class LoginControl extends Component{

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onPress={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton onPress={this.handleLoginClick}/>;
    }

    return (
      <View>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}

        {isLoggedIn && <Text>Login</Text>}
        {!isLoggedIn && <Text>not Login</Text>}

        <Text>The user is {isLoggedIn ? 'currently' : 'not'} logged in.</Text>
        {isLoggedIn ?
          (<LogoutButton onPress={this.handleLogoutClick}/>)
          :
          (<LoginButton onPress={this.handleLoginClick}/>)
        }

        <LoginLabel isLoggedIn={isLoggedIn}/>
      </View>
    );
  }
}
