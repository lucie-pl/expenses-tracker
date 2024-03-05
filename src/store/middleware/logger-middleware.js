import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addExpense, setIncome } from 'store/expense/expense-slice';

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  ///To capture actions
  // predicate: (action) => {
  //1-To capture all actions
  // return true;
  //2-To capture specific actions
  //   return (
  //     action.type === 'expenseSlice/addExpense' ||
  //     action.type === 'expense/setIncome'
  //   );
  // },
  //Simplified way to capture action with isAnyOf
  matcher: isAnyOf(addExpense, setIncome),
  effect: async (action, listenerAPI) => {
    console.log(action);
    console.log(listenerAPI.getState());
  },
});
