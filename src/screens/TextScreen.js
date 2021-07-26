import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function TextScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.text}>Username: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        placeholder="Enter Your Name"
      />
      <Text style={styles.text}>Enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        placeholder="Password"
      />
      {password.length < 5 ? (
        <Text style={styles.text}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    marginLeft: 15,
  },
});
