import React, { useEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Global } from "../../constants/styles";
const ExpensesSummary = ({ period, expenses }) => {
  const expensesTotal = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      {/* NOTE toFixed(2) fixes decimal places. This insures that we only have to decimal places */}
      <Text style={styles.sum}>{expensesTotal.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Global.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Global.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Global.colors.primary500,
  },
});

export default ExpensesSummary;
