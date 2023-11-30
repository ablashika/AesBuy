import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, 
  }),
});





export default store;
