import React, {Component} from "react";
import {View, Text, TextInput} from "react-native";

/** 状态提升 */

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <Text>水会烧开</Text>;
  }
  return <Text>水不会烧开</Text>;
}

class TemperatureInput extends Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(scale, text) {
    this.props.onTemperatureChange(scale, text);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <View>
        <Text>Enter temperature in {scaleNames[scale]}:</Text>
        <TextInput
          style={{ borderColor: 'skyblue', borderWidth: 1}}
          value={temperature}
          onChangeText={text => this.handleChange(scale, text)}/>
      </View>
    );
  }
}

export class Calculator extends Component{

  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(scale, temperature) {
    this.setState({scale: scale, temperature: temperature});
  }

  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <View>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </View>
    );
  }

}
