import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addExpense, setIncome } from 'store/expense/expense-slice';

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(addExpense, setIncome),
  effect: async (action, listenerAPI) => {
    console.log(action);
    console.log(listenerAPI.getState());
  },
});
