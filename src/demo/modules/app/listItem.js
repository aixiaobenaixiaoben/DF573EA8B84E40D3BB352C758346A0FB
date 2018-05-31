import React, {Component} from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


class ListItem extends Component{

  _onPress = () => {
    const { onPressItem, movie } = this.props;
    onPressItem(movie.id);
  };

  render() {
    const { movie } = this.props;
    const { title, rating: {average: rate}, directors, casts, images: {small: imageUri} } = movie;

    let directorNames = '';
    for (const {name} of directors) {
      directorNames += ' ' + name;
    }

    let castNames = '';
    for (const {name} of casts) {
      castNames += ' ' + name;
    }

    return (
      <View style = {style.ListItem}>

        <View style = {style.video}>
          <TouchableOpacity onPress = {() => alert('暂时无法观看预告片')}>
            <ImageBackground source = {{uri: imageUri}} style = {style.imageBack}>
              <View style = {style.play}>
                <FontAwesome name='play' size={15}/>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style = {style.detail}>
          <TouchableOpacity style = {style.touch} onPress = {this._onPress}>
            <Text style = {style.textFirst} numberOfLines ={1}>
              {title}
            </Text>
            <Text style = {style.text}>
              豆瓣评分 <Text style = {{color: 'tomato'}}>{rate}</Text>
            </Text>
            <Text style = {style.text}>
              导演:{directorNames}
            </Text>
            <Text style = {style.text} numberOfLines ={1}>
              主演:{castNames}
            </Text>
          </TouchableOpacity>
        </View>

        <View style = {style.buy}>
          <TouchableOpacity style = {style.buyTouch} onPress = {() => alert('暂时无法购票')}>
            <Text style = {{color: 'white'}}>购票</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  ListItem: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
  video: {
    width: 70,
    height: 100,
  },
  detail: {
    flex: 1,
    height: 100,
    paddingLeft: 10,
  },
  buy: {
    justifyContent: 'center',
    width: 60,
    height: 100,
  },
  imageBack: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 100,
  },
  play: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 12,
    paddingLeft: 4,
  },
  touch: {
    flex: 1,
  },
  textFirst: {
    flex: 3,
    lineHeight: 32,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    flex: 2,
    color: 'dimgrey',
  },
  buyTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    height: 40,
    borderRadius: 20,
  },
});

export default ListItem;