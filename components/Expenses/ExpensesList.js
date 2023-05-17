import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderItem = ({ item }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
