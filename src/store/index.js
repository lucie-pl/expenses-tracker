import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { expenseSlice } from './expense/expense-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { loggerMiddleware } from './middleware/logger-middleware';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // if there are slice we want to persist and other we don't, we can add
  // the one we want to persit in a whitelist: ['EXPENSE']
};

//We combine all the reducers in one before persisting it
const rootReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  // we must add those line of code to avoid getting error messages when adding
  // redux-persist (see the doc)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
