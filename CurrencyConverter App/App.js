import React from 'react';
import { StyleSheet,
   Text,
   View,
   SafeAreaView ,
   TextInput,
   TouchableOpacity,
   TouchableWithoutFeedback,
   Keyboard,

   Alert} from 'react-native';

const  Converter={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.09,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DIHRAM:0.053,
  BITCOIN:0.0000041
} 



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      resultValue:0.0,
      inputValue:'',
    };
  }
  ButtonPressed=(currency) => {
    if (this.state.inputValue==="") {
      Alert.alert('Please enter input in number form')
    }
    let result=this.state.inputValue*Converter[currency]
    this.setState({resultValue:result.toFixed(2)})
   }
  
  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
      <SafeAreaView style={styles.container}>

        <View style={styles.screenviw}>
         <View style={styles.ResContainer}> 
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
         </View>
         <View style={styles.inputContainer}> 
            <TextInput
            style={styles.input} 
            selectionColor="#758AA2"
            keyboardType='numeric'
            value={this.state.inputValue}
            placeholder='Enter the value'
            onChangeText= {inputValue=>{
              this.setState({
                inputValue
              })
            }}
            
            />
         </View>
         <View style={styles.Convobutocontainer}> 
           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("DOLLAR")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}> $</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("EURO")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}> Euro</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("POUND")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}> Pound</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("RUBEL")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}> Rubel</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("AUSDOLLAR")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}>AusDollar</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("CANDOLLAR")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}>CanDollar</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("YEN")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}>Yen</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("DIHRAM")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}>Dihram</Text>

           </TouchableOpacity>

           <TouchableOpacity 
           onPress={()=>{
             this.ButtonPressed("BITCOIN")
           }}
           style={styles.Convobuto}>

             <Text style={styles.ConvobutoTxt}>BitCoin</Text>

           </TouchableOpacity>
         </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAD02E',
    
    marginTop:20
  },
  ResContainer:{
    borderColor:"#DAE0E2",
    height:70,
    marginTop:20,
    backgroundColor:"#3498DB",
    justifyContent:'center',
    alignItems:'center', 
    borderWidth:2
  },
  screenviw:{
    flex:1,
    backgroundColor: '#FAD02E',
    marginTop:40
  },

  resultValue:{
    fontSize:30,
    fontWeight:'bold'
  },
  inputContainer:{
    borderColor:"#DAE0E2",
    height:70,
    marginTop:20,
    backgroundColor:"#3498DB", 
    justifyContent:"center",
    alignItems:"center", 
    borderWidth:2
    

  },
  input:{
    fontSize:20,
    
    justifyContent:"center",
    alignItems:'center',
  },
  Convobutocontainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    borderColor:"#DAE0E2",
    borderWidth:2,
    marginTop:20,
  },
  
  ConvobutoTxt:{
    fontWeight:'bold',
    fontSize:20,
    //Color:"#DAE0E2",
  },

  Convobuto:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#3498DB",
    height:100,
    width:'33.3%',
    borderColor:"#DAE0E2",
    borderWidth:1,
  }

});
  