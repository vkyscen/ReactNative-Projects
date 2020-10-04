import React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView,FlatList,image} from 'react-native';
import * as firebase from 'firebase'
import { Card,Item,Button,Input ,Icon} from 'native-base'

var firebaseConfig = {
  apiKey: "AIzaSyCvNg2kpWB1DVGgcF0_d2kWvvtCeNBZQrA",
  authDomain: "fir-955f9.firebaseapp.com",
  databaseURL: "https://fir-955f9.firebaseio.com",
  projectId: "fir-955f9",
  storageBucket: "fir-955f9.appspot.com",
  messagingSenderId: "240557261861",
  appId: "1:240557261861:web:b403c52ff2cdb2c7"
};

firebase.initializeApp(firebaseConfig)




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: []
    };
  }

  sendMessage = message => {
    var messageListRef = firebase.database().ref("message_list");
    //push message to database
    var newMessageRef = messageListRef.push();
    newMessageRef.set({
      text: message,
      time: Date.now()
    });
    this.setState({ message: "" });
  };

  updateList = messageList => {
    this.setState({ messageList: messageList });
  };

  componentWillMount() {
    //tricky stuff goes here
    var self = this;

    var messageListRef = firebase.database().ref("message_list");

    messageListRef.on("value", dataSnapshot => {
      //into a callback
      if (dataSnapshot.val()) {
        let messageList = Object.values(dataSnapshot.val());
        self.updateList(messageList.reverse());
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Message Board</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.messageList}
            
            keyExtractor={(item, index) => item.time.toString()}
            renderItem={({ item }) => (
              <Card style={styles.listItem}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>
                  {new Date(item.time).toLocaleDateString}
                </Text>
              </Card>
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => {
              this.setState({ message: text });
            }}
            value={this.state.message}
            placeholder="Enter Message"
          />
          <Button
            onPress={() => {
              this.sendMessage(this.state.message);
            }}
            danger
            rounded
            icon
          >
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "#01CBC6"
  },
  header: {
    backgroundColor: "#2B2B52",
    alignItems: "center",
    height: 40,
    justifyContent: "center"
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff"
  }
});


































