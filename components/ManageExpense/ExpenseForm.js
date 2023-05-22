import React, { useState } from "react";
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
  const [inputValues, setInputValues] = useState({
    amount: "",
    description: "",
    date: "",
  });
  const inputChanged = (inputIdentifier, enteredValue) => {
    setInputValues((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };
  console.log(inputValues);
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            // NOTE the first argument in bind is the "this" keyword, the second argument is the first param seen in the function "inputIdentifier"
            onChangeText: inputChanged.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChanged.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChanged.bind(this, "description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default ExpenseForm;
