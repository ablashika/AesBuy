import { createSlice } from '@reduxjs/toolkit';
import { db,auth} from '../../firebase/firebase';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: false,
    error:null,
    user: {},
    authUser:{
        email: '',
      name: '',
      password: '',
      phoneNumber: '',
    }
  },
  reducers: {

    addAuthUser: (state, action) => {
        state.authUser = { ...state.authUser, ...action.payload };
        state.login = true; 
      },

      setUserData: (state, action) => {
        state.user = { ...state.user, ...action.payload };   
        console.log(action.payload, "set user")
        state.login = true; 
        // state.error = false;
      },
    
 loginSuccess: (state, action) => {
    console.log('Login success action dispatched:', action.payload);
    state.login = true;
    state.authUser = { ...state.authUser, ...action.payload }; 
     state.user = { ...state.user, ...action.payload  }; // Ensure only user details are in state.user 
    // state.error = false;
    state.error = null;
  },
  logout: (state) => {
    state.login = false;
    state.user ={};
    state.authUser ={};
  },
  loginError: (state, action) => {
    state.login = false;
    state.error = action.payload;
    state.user =null;
    state.authUser =null;
  },
   
    },
    


});


export const loginUser = (email, password) => async (dispatch) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      console.log(user,'HEYYY')
  
      dispatch(fetchUserData(user.uid));
      dispatch(addAuthUser({ user, authUser: user}));
      dispatch(loginSuccess({ user, authUser: user }));

    } catch (error) {
      dispatch(loginError(error.message));
    }
  }; 


export const logoutUser = () => async (dispatch) => {
  try {
    console.log('Logging out...'); // Add this log
    await auth.signOut();
    dispatch(logout());
    dispatch(addAuthUser({ user: null, authUser: null }));
    dispatch(loginSuccess({ user: null, authUser: null }));
    
    console.log('Logout successful');
  } catch (error) {
    console.error('Error during logout:', error);
  }
  };
  
export const createEmailAccount = (authUser) => async (dispatch) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(authUser.email, authUser.password);
      const user = userCredential.user;

    ;
  
      // Add user data to Firestore
      const userRef = await db.collection('users').add({
        uid: user.uid,
        email: authUser.email,
        name: authUser.name,
        phoneNumber: authUser.phoneNumber,
      });
  
      userRef.onSnapshot((snapshot) => {
        const userData = snapshot.data();
        dispatch(loginSuccess({ user, authUser: userData }));
      });
      dispatch(addAuthUser({ user, authUser: userData }));
      dispatch(loginSuccess({ user, authUser: userData }));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
  
  export const fetchUserData = (uid) => async (dispatch) => {
    try {
      const collectionRef = db.collection('users');
      const snapshot = await collectionRef.get();
      const userDataArray = snapshot.docs.map((doc) => doc.data())
      const foundUser = userDataArray.find((user) => {
        console.log('User UIDs:', uid, user.uid);
        return user.uid === uid;
      });
      console.log(foundUser,"firebase")
      if (foundUser) {
         await dispatch(setUserData(foundUser));
        // await dispatch(addAuthUser(foundUser));
        await dispatch(loginSuccess(foundUser));
      }
    ;
   
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  



export const {
    addAuthUser,
    loginSuccess, 
    logout, 
    loginError,
    setUserData
  } = authSlice.actions;





  export default authSlice.reducer;
