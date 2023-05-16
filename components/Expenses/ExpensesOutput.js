import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, period, sum }) => {
  return (
    <View>
      <ExpensesSummary sum={sum} period={period} />
      <ExpensesList data={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
// NOTE start from here
