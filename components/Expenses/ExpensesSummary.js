import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ExpensesSummary = ({ period, sum }) => {
  return (
    <View>
      <Text>{period}</Text>
      <Text>{sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;
