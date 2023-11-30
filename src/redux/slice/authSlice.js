import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    user: null,
    error: {},
    user:[]
  },
  reducers: {
   
    },


});







export const {
  

  } = authSlice.actions;





  export default authSlice.reducer;
