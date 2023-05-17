import React, { useEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ExpensesSummary = ({ period, expenses }) => {
  const expensesTotal = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{period}</Text>
      {/* NOTE toFixed(2) fixes decimal places. This insures that we only have to decimal places */}
      <Text>{expensesTotal.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesSummary;
