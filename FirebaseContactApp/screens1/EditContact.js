import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";

//TODO: Add UUID
import uuid from "uuid";
import { ImagePicker } from "expo";

import { Form, Item, Input, Label, Button } from "native-base";

import { Header } from "react-navigation";

//TODO: add firebase
import * as firebase from "firebase";

export default class EditContact extends Component {
  static navigationOptions = {
    title: "Edit Contact"
  };

  constructor(props) {
    super(props);
    // set state
    this.state = {
      fname: "",
      lname: "",
      phone: "",
      email: "",
      address: "",
      image: "empty",
      imageDownloadUrl: "empty",
      isUploading: false,
      isLoading: true,
      key: ""
    };
  }

  componentDidMount() {
    var key = this.props.navigation.getParam("key", "");
    this.getContact(key);
  }
  //TODO: getContact  method
  getContact = async key => {
    const self = this;
    const contactRef = firebase
      .database()
      .ref()
      .child(key);
    await contactRef.on("value", dataSnapshot => {
      if (dataSnapshot.val()) {
        contactValue = dataSnapshot.val();
        self.setState({
          fname: conatactValue.fname,
          lname: conatactValue.lname,
          phone: conatactValue.phone,
          email: conatactValue.email,
          address: conatactValue.adress,
          imageUrl: conatactValue.imageURL,
          key: key,
          isLoading: false
        });
      }
    });
  };

  //TODO: update contact method
  updateContact = async key => {
    if (
      this.state.fname !== "" &&
      this.state.lname !== "" &&
      this.state.email !== "" &&
      this.state.phone !== "" &&
      this.state.address !== ""
    ) {
      this.setState({ isUploading: true });

      const DBreference = firebase.database().ref();
      const storageRef = firebase.storage().ref();

      if (this.state.image != "empty") {
        const DownloadURL = await new this.uploadImageAsync(
          this.state.image,
          storageRef
        );
      }
      this.setState({ imageDownloadUrl: DownloadURL });

      var contact = {
        fname: this.state.fname,
        lname: this.state.lname,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        image: this.state.image
      };
      await DBreference.child(key).set(contact, error => {
        if (!error) {
          this.props.navigation.goBack();
        }
      });
    }
  };

  //TODO: pick image from gallery
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.2,
      base64: true,
      allowsEditing: true,
      aspect: [1, 1]
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  //TODO: upload to firebase
  uploadImageAsync = async (uri, storageRef) => {
    const parts = uri.split(".");
    const FileExtension = parts[parts.length - 1];

    //create blob
    const blob = await new promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        reject(new TypeError("network connection failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    //send tp firebase
    const ref = storageRef
      .child("ContactImages")
      .child(uuid.v4() + "." + FileExtension);
    const snapshot = await ref.put(blob);

    //close blob
    blob.close();
    //return
    return await snapshot.ref.getDownloadURL();
  };

  // render method
  render() {
    if (this.state.isUploading) {
      return (
        <View
          style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#B83227" />
          <Text style={{ textAlign: "center" }}>
            Contact Updateing please wait..
          </Text>
        </View>
      );
    }
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 20} // adjust the value here if you need more padding
        style={{ flex: 1 }}
        behavior="padding"
      >
        <TouchableWithoutFeedback
          onPress={() => {
            // dismiss the keyboard if touch any other area then input
            Keyboard.dismiss();
          }}
        >
          <ScrollView style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                this.pickImage();
              }}
            >
              <Image
                source={
                  this.state.image === "empty"
                    ? require("../assets/person.png")
                    : {
                        uri: this.state.image
                      }
                }
                style={styles.imagePicker}
              />
            </TouchableOpacity>
            <Form>
              <Item style={styles.inputItem} floatingLabel>
                <Label>First Name</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={fname => this.setState({ fname })}
                  value={
                    // set current contact value to input box
                    this.state.fname
                  }
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Last Name</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={lname => this.setState({ lname })}
                  value={this.state.lname}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Phone</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item style={styles.inputItem} floatingLabel>
                <Label>Address</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={address => this.setState({ address })}
                  value={this.state.address}
                />
              </Item>
            </Form>

            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.updateContact(this.state.key);
              }}
            >
              <Text style={styles.buttonText}>Update</Text>
            </Button>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  },
  inputItem: {
    margin: 10
  },
  imagePicker: {
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  button: {
    backgroundColor: "#B83227",
    marginTop: 40
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
