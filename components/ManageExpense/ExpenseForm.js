import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Input from "./Input";
import { Global } from "../../constants/styles";
import Button from "../UI/Button";
const ExpenseForm = ({ isEditting, onCancel, onSubmit }) => {
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
  const submitHandler = () => {
    // NOTE here we are manipulating the data to fit our model
    const expenseData = {
      // NOTE by setting the amount to +..., the plus turns that string into a number
      amount: +inputValues.amount,
      //   NOTE our state is managing a string date, so to get a date {} we are making that here in our submission
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
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
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditting ? "Update" : "Add"}
        </Button>
      </View>
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
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: Global.colors.primary200,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Global.colors.primary800,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    minWidth: 120,
  },
});

export default ExpenseForm;
