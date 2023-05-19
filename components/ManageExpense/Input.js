import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Global } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      {/* NOTE rather than setting a bunch of props to this input as seen below we can accept an entire config and spread that. */}
      {/* <TextInput keyboardType={type} /> */}
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Global.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Global.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Global.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
