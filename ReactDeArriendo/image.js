import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class OfferImage extends Component {
  render() {
    let pic = {
      uri: this.props.url
    };
    return (
      <Image source={pic} style={{width: '60%', height: 200}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => OfferImage);
