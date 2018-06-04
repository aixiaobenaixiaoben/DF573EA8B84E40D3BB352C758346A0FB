import React, {Component} from "react";
import {Image, ProgressViewIOS, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios/index";
import FontAwesome from "react-native-vector-icons/FontAwesome";


class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      movie: null,
      watched: false,
      wish: false,
    };
  }

  componentDidMount(){
    const id = this.props.navigation.getParam('id');
    axios.get('http://api.douban.com/v2/movie/subject/' + id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=上海')
      .then(response => {
        this.setState({ movie: response.data });
        clearInterval(this.timer);
      })
      .catch(error => {
        alert(error.message);
      });

    this.timer = setInterval(() => {
      let progress = this.state.progress + 0.01;
      this.setState({progress});
      if (progress >= 0.95) {
        clearInterval(this.timer);
      }
    }, 10);
  }

  toggleState = (field) => {
    this.setState({ [field]: !this.state[field] });
  };

  render() {
    if (this.state.movie === null) {
      return (<ProgressViewIOS progress = {this.state.progress}/>);
    }

    const {
      title,
      year,
      rating: {average},
      ratings_count,
      images: {large: imageUri},
      genres = [],
      durations,
      mainland_pubdate,
      languages,
      wish_count,
      summary,
      countries
    } = this.state.movie;
    const watchColor = this.state.watched ? 'tomato' : 'gray';
    const wishColor = this.state.wish ? 'tomato' : 'gray';

    return (
      <View style={style.view}>

        <ScrollView style = {style.viewDetail}>

          <View style = {style.viewInfo}>
            <View style = {style.titles}>
              <Text style = {style.textFirst} numberOfLines ={2}>{title}</Text>
              <Text style = {style.text}>{genres.join(' ')}</Text>
              <Text style = {style.text}>{countries.join(' ')} {durations.join(' ')}</Text>
              <Text style = {style.text}>{mainland_pubdate} 在中国大陆上映</Text>
            </View>
            <Image source = {{uri: imageUri}} style = {style.image}/>
          </View>

          <View style = {style.viewCount}>
            <View style = {style.countSub}>
              <Text style = {style.countText}>首映年份:</Text>
              <Text style = {style.countText}>{year}</Text>
            </View>
            <View style = {style.countSub}>
              <Text style = {style.countText}>电影语言:</Text>
              <Text style = {style.countText}>{languages.join(' ')}</Text>
            </View>
            <View style = {style.countSub}>
              <Text style = {style.countText}>观众评分:</Text>
              <Text style = {style.countText}>{average}</Text>
            </View>
            <View style = {style.countSub}>
              <Text style = {style.countText}>参与评分人数:</Text>
              <Text style = {style.countText}>{ratings_count}</Text>
            </View>
            <View style = {style.countSub}>
              <Text style = {style.countText}>想看人数:</Text>
              <Text style = {style.countText}>{wish_count}</Text>
            </View>
          </View>

          <View style = {style.viewMark}>
            <TouchableOpacity style = {style.markTouch} onPress = {() => this.toggleState('watched')}>
              <FontAwesome name='heart' size={20} color = {watchColor}/>
              <Text style = {style.markText}>想看</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {style.markTouch} onPress = {() => this.toggleState('wish')}>
              <FontAwesome name='star' size={20} color = {wishColor}/>
              <Text style = {style.markText}>看过</Text>
            </TouchableOpacity>
          </View>

          <View style = {style.viewSummary}>
            <Text style = {style.textSummary}>{summary}</Text>
          </View>

        </ScrollView>

        <View style = {style.viewBottom}>
          <TouchableOpacity style = {style.buyTouch} onPress = {() => this.props.navigation.goBack()}>
            <Text style = {style.buyTouchText}>无法购票,返回列表</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  viewDetail: {
    flex: 1,
  },
  viewBottom: {
    height: 50,
  },
  viewInfo: {
    flexDirection: 'row',
    height: 160,
    padding: 10,
    backgroundColor: 'slategrey',
  },
  viewCount: {
    height: 170,
    padding: 10,
  },
  viewMark: {
    height: 50,
    flexDirection: 'row',
  },
  viewSummary: {
    padding: 10,
    paddingBottom: 50,
  },
  titles: {
    flex: 1,
    height: 140,
  },
  image: {
    width: 100,
    height: 140,
  },
  textFirst: {
    flex: 2,
    fontSize: 20,
    color: 'white',
  },
  text: {
    flex: 1,
    lineHeight: 28,
    color: 'whitesmoke',
  },
  countSub: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countText: {
    lineHeight: 30,
    color: 'dimgrey',
  },
  markTouch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
  markText: {
    color: 'gray',
    fontSize: 18,
    paddingLeft: 5,
  },
  textSummary: {
    fontSize: 16,
    lineHeight: 30,
  },
  buyTouch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  buyTouchText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Detail;