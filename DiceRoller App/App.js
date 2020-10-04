import React from "react";
import { StyleSheet, Text, View,Button ,Image,TouchableOpacity,Alert} from 'react-native';
import But from './assets/src/Components/But'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      uri:require('./assets/src/img/dice1.png'), 
      uri2:require('./assets/src/img/dice5.png')
    }
  }
  RandomValue=()=>{ 
    return Math.floor(Math.random()*6) +1 
  }

  RandomValue2=()=>{ 
    return Math.floor(Math.random()*6) +1 
  }

   
  pressPanita=()=>{
    //Alert.alert('vaada macha '+this.RandomValue());

    var NUM=this.RandomValue()
    switch (NUM) {
      case 1:this.setState({uri:require('./assets/src/img/dice1.png')})
        
        break;
      
      case 2:this.setState({uri:require('./assets/src/img/dice2.png')})
      
       break;
      case 3:this.setState({uri:require('./assets/src/img/dice3.png')})
      
       break; 
      case 4:this.setState({uri:require('./assets/src/img/dice4.png')})
      
       break; 
      case 5:this.setState({uri:require('./assets/src/img/dice5.png')})
        
       break;    
      
      default:this.setState({uri:require('./assets/src/img/dice6.png')})
        break;
    }
  }

  pressPanita2=()=>{
    //Alert.alert('vaada macha '+this.RandomValue());

    var NUM=this.RandomValue2()
    switch (NUM) {
      case 1:this.setState({uri2:require('./assets/src/img/dice5.png')})
        
        break;
      
      case 2:this.setState({uri2:require('./assets/src/img/dice4.png')})
      
       break;
      case 3:this.setState({uri2:require('./assets/src/img/dice3.png')})
      
       break; 
      case 4:this.setState({uri2:require('./assets/src/img/dice2.png')})
      
       break; 
      case 5:this.setState({uri2:require('./assets/src/img/dice5.png')})
        
       break;    
      
      default:this.setState({uri2:require('./assets/src/img/dice1.png')})
        break;
    }
  }


  render() {
    return (
      <View style={[styles.container]}>
        <View style={{flexDirection:'row',}}> 
          <Image style={{flexShrink:5}}
          source={this.state.uri}
          
          />
          <Image style={{flexShrink:5}}
          source={this.state.uri2}
          />
        </View>
        <TouchableOpacity onPress={()=>{
          this.pressPanita()
          this.pressPanita2()

        }} 
        >
  
        
        
        <Text style={styles.Butto}> Press me!</Text>
  
        </TouchableOpacity>
          
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#E83350',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    
  },
  Butto:{
    backgroundColor:'#FAC42F',
    borderRadius:17,
    borderWidth:1,
    fontSize:35,
    padding:5,
    marginBottom:10,
    //fonteight:'bold',


  }
});
