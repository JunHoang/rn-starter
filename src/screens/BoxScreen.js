import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "steelblue",
    flex: 2,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "steelblue",
    flex: 2,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "steelblue",
    flex: 1,
  },
});
