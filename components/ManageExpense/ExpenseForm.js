import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View>
      <Input label="Description" />
      <Input label="Amount" />
      <Input label="Date" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseForm;
