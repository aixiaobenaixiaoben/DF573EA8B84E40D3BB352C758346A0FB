import React from 'react';
import {Text, View} from 'react-native';
import axios from "axios";

export default class NetworkAsios extends React.Component {

  constructor(props){
    super(props);
    this.state ={ data: ''};
  }

  componentDidMount(){
    axios.get('/movies.json')
      .then(response => {
        this.setState({data: JSON.stringify(response.data, null, 2)});
      })
      .catch(error => {
        this.setState({data: error.message});
      });
  }

  render(){
    return(
      <View style={{padding: 20}}>
        <Text style={{color: 'red'}}>{this.state.data}</Text>
      </View>
    );
  }
}