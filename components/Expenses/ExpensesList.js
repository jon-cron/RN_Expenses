import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";

const ExpensesList = ({ data }) => {
  return <FlatList data={data} />;
};

const styles = StyleSheet.create({});

export default ExpensesList;
