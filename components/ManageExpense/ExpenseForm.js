import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { Global } from "../../constants/styles";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utilities/date";
const ExpenseForm = ({ isEditting, onCancel, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    // NOTE we are checking to see if defaultValues is undefined and conditionally rendering based upon that bool
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
    date: {
      value: defaultValues
        ? getFormattedDate(defaultValues.date)
        : getFormattedDate(new Date()),
      isValid: true,
    },
  });

  const inputChanged = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    // NOTE here we are manipulating the data to fit our model
    const expenseData = {
      // NOTE by setting the amount to +..., the plus turns that string into a number
      amount: +inputs.amount.value,
      //   NOTE our state is managing a string date, so to get a date {} we are making that here in our submission
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid input", "please check your input values");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };
  const formIsInvlid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            // NOTE the first argument in bind is the "this" keyword, the second argument is the first param seen in the function "inputIdentifier"
            onChangeText: inputChanged.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          invalid={!inputs.date.isValid}
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChanged.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChanged.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvlid && (
        <Text style={styles.errorText}>
          Invalid entries. Please fill out all boxes
        </Text>
      )}
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
  errorText: {
    textAlign: "center",
    color: Global.colors.error500,
    margin: 8,
  },
});

export default ExpenseForm;
