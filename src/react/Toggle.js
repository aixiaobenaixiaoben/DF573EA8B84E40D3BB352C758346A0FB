import React, {Component} from 'react';
import {View,Button} from 'react-native';

/** 事件处理 */

export class Toggle extends Component{

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    /** 类的方法默认不会绑定 this */
    this.handleClick1 = this.handleClick1.bind(this);
  }

  /** 类的方法绑定 this */
  handleClick1() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  /** 属性初始化器绑定回调函数(实验性) */
  handleClick2 = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  /** 回调函数中使用 箭头函数(不推荐) */
  handleClick3() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  /** 通过 bind 的方式传递参数,this代表的是上下文对象 */
  passParams1(name) {
    alert(name + ' from method1');
  }

  /** 通过箭头函数传递参数 */
  passParams2(name) {
    alert(name + ' from method2');
  }

  render() {
    return (
      <View>
        <Button title={this.state.isToggleOn ? 'ON' : 'OFF'} onPress={this.handleClick1}/>
        <Button title={this.state.isToggleOn ? 'ON' : 'OFF'} onPress={this.handleClick2}/>
        <Button title={this.state.isToggleOn ? 'ON' : 'OFF'} onPress={(e) => this.handleClick3(e)}/>

        <Button title='pass param 1' onPress={this.passParams1.bind(this, 'Kevin')}/>
        <Button title='pass param 2' onPress={() => this.passParams2('Sara')}/>
      </View>
    );
  }

}