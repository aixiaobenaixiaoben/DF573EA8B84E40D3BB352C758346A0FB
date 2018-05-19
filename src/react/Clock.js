import React, {Component} from 'react';
import {View, Text} from 'react-native';

/** 组件 & Props & State & 生命周期 */

class SubClock extends Component{

  render() {
    return (
      <View>
        <Text style={{color: 'red'}}>
          {this.props.date.toLocaleTimeString("zh-CN", {timeZone: "Asia/Shanghai", hour12: false})}
        </Text>
      </View>
    );
  }
}

export class Clock extends Component{

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <View>
        <Text>hello world!</Text>
        <Text>It is {this.state.date.toLocaleTimeString("zh-CN", {timeZone: "Asia/Shanghai", hour12: false})}</Text>
        <SubClock date={this.state.date}/>
      </View>
    );
  }

}