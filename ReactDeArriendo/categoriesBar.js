import React, { Component } from 'react';
import { StyleSheet,AppRegistry, View, ActivityIndicator, ScrollView } from 'react-native';
import CategoryIcon from './categories'


export default class ViewIcons extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(global.domain+'/categories')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.categories,
        }, function(){
            console.log(this.state.dataSource)
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView 
      showsHorizontalScrollIndicator={false} 
      style={styles.scrollview} horizontal={true} >
        {this.state.dataSource.map((item,index) => (
          <CategoryIcon key={index} url={global.domain+item.image_file_name}/>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  scrollview:{
    shadowColor: 'white',
    marginTop: 20,
    height: 60,
    
    
  },
})

AppRegistry.registerComponent('AwesomeProject', () => ViewIcons);
