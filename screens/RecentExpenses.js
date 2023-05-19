import React, { useContext } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utilities/date";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      period={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText="No expenses in the past 7 days"
    />
  );
};

const styles = StyleSheet.create({});

export default RecentExpenses;
