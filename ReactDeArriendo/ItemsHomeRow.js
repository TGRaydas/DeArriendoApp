import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View} from 'react-native';
import Item from './Item'

export default class ItemsHomeRow extends Component {

  render() {
    var item = this.props.data
    return (
      
        <View style={styles.rowbar}>       
        {item.map((item, index) =>
          (
            <Item key={index}
            url={global.domain+item.image_file_name}
            name={item.name}
            price = {item.price}
            />
          )
        )} 
        </View>
        
    )
  }
}

const styles = StyleSheet.create({
  scrollview:{
      
    shadowColor: 'white',
    width: '90%',
  },
  rowbar:{
     height: 160,
     justifyContent: 'space-around',
     flexDirection: 'row',
     
  }
})




AppRegistry.registerComponent('AwesomeProject', () => ItemsHomeRow);
