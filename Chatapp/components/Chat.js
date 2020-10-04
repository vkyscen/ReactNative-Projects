import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Firebase from "../Firebase";
import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends React.Component {
  static navigationOptions = {
    title: "My chat room",
    headerStyle: { backgroundColor: "yellow" },
    headerTintColor: "blue"
  };

  state = {
    messages: []
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Firebase.shared.uid
    };
  }

  componentDidMount() {
    Firebase.shared.on(message =>
      this.setState(previousState => {
        messages: GiftedChat.append(previousState.messages, message);
      })
    );
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        user={this.user}
        onSend={Firebase.shared.send}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
