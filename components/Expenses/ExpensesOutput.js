import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-05"),
  },
  {
    id: "e2",
    description: "groceries",
    amount: 100.5,
    date: new Date("2023-01-05"),
  },
  {
    id: "e3",
    description: "phone charger",
    amount: 19.99,
    date: new Date("2023-02-05"),
  },
  {
    id: "e4",
    description: "car repair",
    amount: 120.25,
    date: new Date("2022-12-15"),
  },
  {
    id: "e5",
    description: "lunch",
    amount: 10.0,
    date: new Date("2023-03-05"),
  },
];

const ExpensesOutput = ({ expenses, period }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
      <ExpensesList data={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpensesOutput;
// NOTE start from here
