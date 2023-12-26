import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import authReducer from './reducers/auth.reducer';
import formsReducer from './reducers/forms.reducer';
import form1Reducer from './reducers/singleForm.reducer';
import profileReducer from './reducers/profile.reducer';
import paymentReducer from './reducers/payment.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formsReducer,
    form1: form1Reducer,
    profile: profileReducer,
    payment: paymentReducer,
  },
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = (arg) =>
  useSelector(arg, _.isEqual);
