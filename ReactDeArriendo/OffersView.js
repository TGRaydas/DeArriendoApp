import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View, Text, ScrollView } from 'react-native';
import OfferImage from './image'
import OffersText from './OfferText'
export default class OffersView extends Component {
  render() {
    return (
        <View style={styles.view}>
            <OfferImage url="https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg"></OfferImage>
            <OffersText/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    view:{

        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

AppRegistry.registerComponent('AwesomeProject', () => OffersView);
