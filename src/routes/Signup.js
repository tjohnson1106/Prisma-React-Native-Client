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
          <TextInput value={name} style={styles.field} placeholder="name" />
          <TextInput
            value={username}
            style={styles.field}
            placeholder="email"
          />
          <TextInput
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
