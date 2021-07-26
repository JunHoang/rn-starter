import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function TextScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.text}>My name is {name}</Text>
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
    margin: 15,
  },
});
