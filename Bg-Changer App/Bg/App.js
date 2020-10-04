import React from 'react';
import { StyleSheet, Text,View, Button,TouchableOpacity,Alert,Image } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      Backg:null,
      buttt:null
    }
  }
  Generator= ()=>{
    return(
      "rgb(" + Math.floor(Math.random()*256) +
      "," + Math.floor(Math.random()*256) +
      "," + Math.floor(Math.random()*256) + ")"
    )

  }
  ButGenerator= ()=>{
    return(
      "rgb(" + Math.floor(Math.random()*256) +
      "," + Math.floor(Math.random()*256) +
      "," + Math.floor(Math.random()*256) + ")"
    )
    }
  
  ondress=()=>{
    this.setState({backg:this.Generator(),buttt:this.ButGenerator()})
 };
  
  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.state.backg}]}>
           <TouchableOpacity 
            onPress={this.ondress}>
                <Text style={[styles.butt,{backgroundColor:this.state.buttt}]}>Play.!</Text>
                
                </TouchableOpacity>
        
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  butt:{
    backgroundColor:'#E44236',
    borderWidth:2,
    borderRadius:20,
    borderColor:'white',
    fontSize:40,
    paddingVertical:10,
    paddingHorizontal:36,
    

  }
});
