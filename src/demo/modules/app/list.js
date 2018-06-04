import React, {Component} from "react";
import {FlatList} from "react-native";
import axios from "axios";
import ListItem from "./listItem";


class List extends Component {

  constructor(props){
    super(props);
    this.state ={
      movies: {},
    };
  }

  componentDidMount(){
    axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=上海')
      .then(response => {
        // console.log(response.data);
        this.setState({
          ...this.state,
          movies: response.data
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  _keyExtractor = (item) => item.id;

  _onPressItem = (id: string) => {
    this.props.navigation.navigate('AppDetail', {id});
  };

  _renderItem = ({item}) => (
    <ListItem
      movie={item}
      onPressItem={this._onPressItem}
    />
  );

  render() {
    const { subjects = []} = this.state.movies;
    return (
      <FlatList
        data = {subjects}
        extraData = {this.state}
        keyExtractor = {this._keyExtractor}
        renderItem = {this._renderItem}
      />
    );
  }
}

export default List;