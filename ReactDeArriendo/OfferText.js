import React, { Component } from 'react';
import { StyleSheet,AppRegistry, Text, View } from 'react-native';
export default class OffersText extends Component {
  render() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                Para leer eficientemente cualquier texto es necesario saber 
                cómo está construido. Un texto ya sea (artículo periodístico, ensayo o "ensay") 
                consta generalmente de: 1) un título, 2) una introducción 
                (uno o dos párrafos iníciales); 
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'white',
        width: '30%',
    },
    text:{
        padding:5,
        fontSize: 12,
    }
})

AppRegistry.registerComponent('AwesomeProject', () => OffersText);
