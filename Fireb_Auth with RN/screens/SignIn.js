import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,KeyboardAvoidingView,ScrollView} from 'react-native';

import *as firebase from 'firebase'

import { Form,Item,Label,Input,Button} from 'native-base'


export default class SignIn extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }


  static navigationOptions={
    title:'SignIn',
    Header:null
  }
   
  signinUser=(email,password)=>{
    firebase.auth()
     .signInWithEmailAndPassword(email,password)
     .then( ()=>{
       this.props.navigate.replace('Home')
     } )
     .catch( error=>{ 
       alert(error.message)
     } )
  }

  render() {
    return (
      <ScrollView style={{ flex:1 }}>
          <KeyboardAvoidingView
          style={styles.container}
          behavior="position"
          enabled
          >
          
            <View style={styles.logoContainer}>
              <Image source={require("../assets/logo.png")} />
              <Text>LearnCodeOnline.in</Text>
            </View>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>password</Label>
                <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Button
                style={styles.button}
                full
                rounded
                onPress={() => {
                  this.signinUser(
                    this.state.email,
                    this.state.password

                  )
                }}
              >
                <Text style={styles.buttonText}>Sign in</Text>
              </Button>
            </Form>
            <View style={styles.footer}>
              <Text>OR</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >
                <Text>Create a new Account ?</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </ScrollView>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});