import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'



export default class Lodingscreen extends React.Component {
  static navigationOptions={
    title:'Loading',
    Header:null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged( (authenticate) => { 
      if (authenticate) {
        this.props.navigation.replace('Home')
      } 
      else { 
        this.props.navigation.replace('SignIn')
      }

    }  )
  }

  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator color='red' size="large" />
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
});
