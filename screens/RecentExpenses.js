import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utilities/date";
import { getExpenses } from "../utilities/http";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  useEffect(() => {
    const getData = async () => {
      const expenses = await getExpenses();
      expensesContext.setExpenses(expenses);
    };
    getData();
  }, []);
  // const expensesContext = useContext(ExpensesContext);

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
