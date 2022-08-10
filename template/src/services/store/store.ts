import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers } from 'redux-persist';

import { testReducer } from './test';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const reducer = persistCombineReducers(config, {
  test: testReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
