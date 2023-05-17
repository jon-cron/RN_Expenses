import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ExpenseItem = ({ itemData }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>ExpenseItem</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseItem;
