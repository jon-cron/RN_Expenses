import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Global } from "../../constants/styles";
import Button from "../UI/Button";
const ErrorOverLay = ({ message }) => {
  const onConfirm = () => {};
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!!!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Global.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ErrorOverLay;
