import React, { Component } from 'react';
import { StyleSheet,AppRegistry, Image, View } from 'react-native';

export default class CategoryIcon extends Component {
  render() {
    let pic = {
      uri: this.props.url
    };
    return (
    <Image source={pic} style={styles.icons}/>
    );
  }
}

const styles = StyleSheet.create({
    icons: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      marginRight: 20,
    },
  });
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => CategoryIcon);
