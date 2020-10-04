import React,{Component} from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default class But extends Component {
  
  render() {
    return (
    
      <TouchableOpacity onPress={()=>{
        this.pressPanita()
      }} >

      
      
      <Text style={styles.Butto}> {this.props.Name}</Text>

      </TouchableOpacity>
        
    );
  }
}

  const styles = StyleSheet.create({
    
    Butto:{
        backgroundColor:'#FAC42F',
        borderRadius:17,
        borderWidth:1,
        fontSize:35,
        padding:5,
        marginBottom:10,
        //fontWeight:'bold',
    },
    
    
  });
