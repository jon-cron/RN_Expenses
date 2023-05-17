import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput period={"All expenses"} />;
};

const styles = StyleSheet.create({});

export default AllExpenses;
