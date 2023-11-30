import { createSlice } from '@reduxjs/toolkit';
import { auth} from '../../firebase/firebase';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: false,
    error: null,
    authUser:{
        email: '',
      name: '',
      password: '',
      phoneNumber: '',
    }
  },
  reducers: {

    addAuthUser:(state, action)=>{
        console.log('Handling addAuthUser action:', state);
            state.authUser = { ...state.authUser, ...action.payload };
         },
    
 loginSuccess: (state, action) => {
  
    console.log('Login success action dispatched:', action.payload);

    state.login = true;
    state.user = action.payload;
    state.error = null;
  },
  logout: (state) => {
    state.login = false;
    state.user = null;
  },
  loginError: (state, action) => {
    state.error = action.payload;
  },
  

   
    },
    


});

export const loginUser = (email, password) => async (dispatch) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
  
  


export const logoutUser = () => async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  // Asynchronous action creator for creating a new user account
  export const createEmailAccount = (authUser) => async (dispatch) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(authUser.email, authUser.password);
      const user = userCredential.user;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };





export const {
    addAuthUser,
    loginSuccess, logout, loginError
  } = authSlice.actions;





  export default authSlice.reducer;
