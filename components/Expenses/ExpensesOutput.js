import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { Global } from "../../constants/styles";

const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
      <ExpensesList data={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: Global.colors.primary700,
  },
});

export default ExpensesOutput;
// NOTE start from here
