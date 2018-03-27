import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

class Signup extends Component {
  state = {
    values: {
      name: "",
      username: "",
      password: ""
    },
    errors: {},
    isSubmitting: false
  };

  submit = () => {};

  onChangeText = (key, value) => {
    this.setState(state => ({
      values: {
        ...state,
        [key]: value
      }
    }));
  };

  render() {
    const { values: { name, username, password } } = this.state;

    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ width: 200 }}>
          <TextInput
            onChangeText={text => this.onChangeText("name", text)}
            value={name}
            style={styles.field}
            placeholder="name"
          />
          <TextInput
            onChangeText={text => this.onChangeText("username", text)}
            value={username}
            style={styles.field}
            placeholder="email"
          />
          <TextInput
            onChangeText={text => this.onChangeText("password", text)}
            value={password}
            style={styles.field}
            placeholder="password"
          />
          <Button title="Create Account" onPress={this.submit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 15,
    height: 35
  }
});

export default Signup;
