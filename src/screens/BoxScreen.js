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
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    backgroundColor: "salmon",
    borderColor: "steelblue",
    height: 100,
    width: 100,
  },
  textTwoStyle: {
    borderWidth: 3,
    backgroundColor: "lightgreen",
    borderColor: "steelblue",
    height: 100,
    width: 100,
    // top: 100, // case 1
    alignSelf: "flex-end", //case 2
  },
  textThreeStyle: {
    borderWidth: 3,
    backgroundColor: "violet",
    borderColor: "steelblue",
    height: 100,
    width: 100,
  },
});
