import React, {Component} from "react"
import {View, StyleSheet} from 'react-native'

const style = StyleSheet.create({
  IconBadge: {
    position:'absolute',
    top:0,
    right:0,
    minWidth:20,
    height:20,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  MainView: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class IconBadge extends Component {

  render(){
    const { Hidden, MainElement, BadgeElement, MainViewStyle = {}, IconBadgeStyle = {}} = this.props;

    return (
      <View style={[style.MainView, MainViewStyle]}>
        {MainElement}
        { !Hidden &&
        <View style={[style.IconBadge, IconBadgeStyle]}>
          {BadgeElement}
        </View>
        }
      </View>
    )
  }
}

export default IconBadge;