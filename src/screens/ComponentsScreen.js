import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  const greeting = <Text style={styles.subHeaderStyle}>My name is Dung</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {greeting}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
