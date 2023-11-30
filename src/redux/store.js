// 
// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import authReducer from './actions/authActions'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, 
  }),
});





export default store;
