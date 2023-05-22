import React, { createContext, useReducer } from "react";
// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "a pair of shoes",
//     amount: 59.99,
//     date: new Date("2022-12-05"),
//   },
//   {
//     id: "e13",
//     description: "a pair of shoes",
//     amount: 59.99,
//     date: new Date("2023-05-15"),
//   },
//   {
//     id: "e2",
//     description: "groceries",
//     amount: 100.5,
//     date: new Date("2023-01-05"),
//   },
//   {
//     id: "e3",
//     description: "phone charger",
//     amount: 19.99,
//     date: new Date("2023-02-05"),
//   },
//   {
//     id: "e4",
//     description: "car repair",
//     amount: 120.25,
//     date: new Date("2022-12-15"),
//   },
//   {
//     id: "e5",
//     description: "lunch",
//     amount: 10.0,
//     date: new Date("2023-03-05"),
//   },
//   {
//     id: "e6",
//     description: "phone charger",
//     amount: 19.99,
//     date: new Date("2023-02-05"),
//   },
//   {
//     id: "e7",
//     description: "car repair",
//     amount: 120.25,
//     date: new Date("2022-12-15"),
//   },
//   {
//     id: "e8",
//     description: "lunch",
//     amount: 10.0,
//     date: new Date("2023-03-05"),
//   },
//   {
//     id: "e9",
//     description: "phone charger",
//     amount: 19.99,
//     date: new Date("2023-02-05"),
//   },
//   {
//     id: "e10",
//     description: "car repair",
//     amount: 120.25,
//     date: new Date("2022-12-15"),
//   },
//   {
//     id: "e11",
//     description: "lunch",
//     amount: 10.0,
//     date: new Date("2023-03-05"),
//   },
// ];
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  // NOTE the second value in this use reducer is our initial state
  const [expenseState, dispatch] = useReducer(expensesReducer, []);
  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };
  const addExpense = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.floor(10000 * Math.random()),
    };
    dispatch({ type: "ADD", payload: newExpense });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
