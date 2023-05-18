import React, { useContext } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      period={"All expenses"}
      expenses={expenseContext.expenses}
    />
  );
};

const styles = StyleSheet.create({});

export default AllExpenses;
