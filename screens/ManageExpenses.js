import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { Global } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
const ManageExpenses = ({ route, navigation }) => {
  const expenseContext = useContext(ExpensesContext);

  // NOTE since we can land on this screen without params we must use params?. to avoid errors
  const expenseId = route.params?.expenseId;
  // NOTE the double !! turns whatever is attached to it a boolean. so if there is no expenseId it will read false; if there is an id it will read true
  const isEditting = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [isEditting, navigation]);

  const handleDelete = () => {
    expenseContext.deleteExpense(expenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    // NOTE this function allows you to close a screen and go back to the previous page
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditting) {
      expenseContext.updateExpense(expenseId, {
        description: "bananas",
        amount: 19.99,
        date: new Date("2023-05-16"),
      });
    } else {
      expenseContext.addExpense({
        description: "bananas",
        amount: 300.29,
        date: new Date("2023-05-16"),
      });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditting ? "Update" : "Add"}
        </Button>
      </View>
      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Global.colors.error500}
            size={36}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ManageExpenses;
