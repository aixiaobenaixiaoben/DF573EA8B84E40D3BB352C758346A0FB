import React from 'react';
import {Text, View} from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ data: ''};
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          data: responseJson,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    return(
      <View style={{padding: 20}}>
        <Text style={{color: 'blue'}}>{JSON.stringify(this.state.data, null, 2)}</Text>
      </View>
    );
  }
}