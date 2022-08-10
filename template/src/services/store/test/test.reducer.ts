import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITestState } from './test.types';

export const initialTestState: ITestState = {
  value: '',
};

const testSlice = createSlice({
  name: 'test',
  initialState: initialTestState,
  reducers: {
    setTestValue: (state: ITestState, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setTestValue } = testSlice.actions;

export const testReducer = testSlice.reducer;
