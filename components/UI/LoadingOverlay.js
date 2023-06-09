import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Global } from "../../constants/styles";
const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
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
});

export default LoadingOverlay;
