import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  //state === {count: number}
  //action === {type: 'increase' || 'decrease', payload: 1 | -1}

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
export default function CounterScreen() {
  initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
