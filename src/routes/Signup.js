import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

class Signup extends Component {
  state = {
    values: {},
    errors: {},
    isSubmitting: false
  };
  render() {
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
            style={{
              borderBottomWidth: 1,
              fontSize: 20
            }}
            placeholder="name"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              fontSize: 20
            }}
            placeholder="email"
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              fontSize: 20
            }}
            placeholder="password"
          />
        </View>
      </View>
    );
  }
}

export default Signup;
