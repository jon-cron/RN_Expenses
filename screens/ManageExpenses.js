import React, { useLayoutEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ManageExpenses = ({ route, navigation }) => {
  // NOTE since we can land on this screen without params we must use params?. to avoid errors
  const expenseId = route.params?.expenseId;
  // NOTE the double !! turns whatever is attached to it a boolean. so if there is no expenseId it will read false; if there is an id it will read true
  const isEditting = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [isEditting, navigation]);
  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ManageExpenses;
