import React, {Component} from "react";
import {AsyncStorage, FlatList} from "react-native";
import axios from "axios";
import ListItem from "./listItem";

const STORAGE_KEY = 'ASYNC_STORAGE_MOVIE'

class List extends Component {

  constructor(props){
    super(props);
    this.state ={
      movies: {},
    };
  }

  loadFromStorage = async () => {
    try {
      const movies = await AsyncStorage.getItem(STORAGE_KEY)
      if (movies !== null) {
        this.setState({movies: JSON.parse(movies)})
      }
    } catch (e) {
      alert('Fail to load from AsyncStorage')
    }
  }

  saveToStorage = async (movies) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(movies))
    } catch (e) {
      alert('Fail to save to AsyncStorage')
    }
  }

  componentDidMount(){
    axios.get('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=上海')
      .then(response => {
        // console.log(response.data);
        this.setState({
          ...this.state,
          movies: response.data
        });
        this.saveToStorage(response.data)
      })
      .catch(error => {
        alert(error.message);
        this.loadFromStorage()
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