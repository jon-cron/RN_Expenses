import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utilities/date";
import { getExpenses } from "../utilities/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesContext = useContext(ExpensesContext);
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const expenses = await getExpenses();
        expensesContext.setExpenses(expenses);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);
  // const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  if (isFetching) {
    return <LoadingOverlay />;
  }
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
