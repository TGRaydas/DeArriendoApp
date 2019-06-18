import React, { Component } from 'react';
import { StyleSheet,AppRegistry, ActivityIndicator, View, ScrollView } from 'react-native';
import ItemsHomeRow from './ItemsHomeRow'
import Item from './Item'
export default class ItemsHome extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(global.domain+'/products')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.products,
        }, function(){
            console.log(this.state.dataSource)
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{paddingTop:0}}>
      <ScrollView style={{height:'40%'}}
      showsHorizontalScrollIndicator={false}>
        {this.state.dataSource.map((item, index) => (
          <ItemsHomeRow key={index} data={item} />
        ))}
            
      </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  scrollview:{
    shadowColor: 'white',
    width: '100%',
  },
})




AppRegistry.registerComponent('AwesomeProject', () => ItemsHome);
