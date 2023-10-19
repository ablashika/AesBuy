// 
// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Disable serializability check for Firestore data
  }),
});





export default store;
