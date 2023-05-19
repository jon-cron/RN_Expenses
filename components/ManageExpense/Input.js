import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      {/* NOTE rather than setting a bunch of props to this input as seen below we can accept an entire config and spread that. */}
      {/* <TextInput keyboardType={type} /> */}
      <TextInput {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Input;
