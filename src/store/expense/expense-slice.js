import { createSlice } from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: {
    income: 1500,
    expenseList: [],
  },
  //To create actions
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
    deleteListItem: (currentSlice, action) => {
      const filteredExpenseList = currentSlice.expenseList.filter(
        (expense) => expense.id !== action.payload.id
      );
      currentSlice.expenseList = filteredExpenseList;
    },
  },
});

// To add all our expenses
const { addExpense, setIncome, deleteListItem } = expenseSlice.actions;

export { addExpense, setIncome, deleteListItem };
