import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Global } from "../../constants/styles";

const ExpenseItem = ({ date, description, amount }) => {
  return (
    <View>
      <Pressable>
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{date.toString()}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.amountText}>{amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Global.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: Global.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Global.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amountText: {
    color: Global.colors.primary500,
    fontWeight: "bold",
  },
});

export default ExpenseItem;
