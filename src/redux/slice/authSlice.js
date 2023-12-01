import { createSlice } from '@reduxjs/toolkit';
import { db,auth} from '../../firebase/firebase';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: false,
    error: null,
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
        state.error = null;
      },

      setUserData: (state, action) => {
        state.user = { ...state.user, ...action.payload };
        console.log(action.payload)
        state.login = true; 
      },
    
 loginSuccess: (state, action) => {
    console.log('Login success action dispatched:', action.payload);
    state.login = true; 
    state.user = { ...state.user, ...action.payload.user }; 
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
  
      const userDoc = db.collection('users').doc(user.uid);
      userDoc.onSnapshot((snapshot) => {
        const authUserData = snapshot.data();
        dispatch(loginSuccess({ user, authUser: authUserData }));
      });

      console.log(userDoc)
      console.log( authUserData, "lxhh" )
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
  
      // Listen for changes to the document
      userRef.onSnapshot((snapshot) => {
        const userData = snapshot.data();
  
        // Dispatch the updated user data to the Redux store
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
      const userData = snapshot.docs.map((doc) => (doc.data())).find((user) => user.id === uid) ;
      console.log(userData,"fiif")
    await dispatch(setUserData(userData));
    await  dispatch(loginSuccess(userData));
    
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
