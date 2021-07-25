import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ImageDetail({ title, imageSource, imageScore }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
