import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  container,
  Form,
  Input,
  Item,
  Button,
  Label,
  Container
} from "native-base";

class Home extends React.Component {
  static navigationOptions = {
    title: "My chat room",
    headerStyle: { backgroundColor: "yellow" },
    headerTintColor: "blue"
  };

  state = {
    name: ""
  };
  render() {
    return (
      <Container style={styles.container}>
        <Form style={styles.formr}>
          <Item floating Label>
            <Label>Username</Label>
          </Item>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={name => this.setState({ name })}
          />
          <Button
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => {
              this.props.navigation.navigate("Chat", { name: this.state.name });
            }}
          >
            <Text>Start Chat</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  formr: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
