import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput period={"Last 7 days"} />;
};

const styles = StyleSheet.create({});

export default RecentExpenses;
