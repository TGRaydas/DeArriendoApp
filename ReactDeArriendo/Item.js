import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View, Text, Image } from 'react-native';
export default class Item extends Component {
  render() {
    let pic = {
        uri: this.props.url
      };
    return (
        <View style={styles.view}>
            <Image source={pic} style={{width: 80, height: 100}}/>
            <Text>{this.props.name}</Text>
            <Text>{this.props.price}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    itemImage: {
        height: 100,
        width: '20%',
        resizeMode: 'contain',
    },
    view:{
        flex:1,
        alignItems: 'center',
        height: 200,
        width:  100,
    }
})

AppRegistry.registerComponent('AwesomeProject', () => Item);
