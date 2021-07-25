import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ImageDetail(props) {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
