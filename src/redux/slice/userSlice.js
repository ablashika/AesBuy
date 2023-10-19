import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import firebase from '../../firebase/firebase';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    user: null,
    error: {},
    products: [],
    shoes: [],
    clothes: [],
  },
  reducers: {
    // Synchronous actions
    loginSuccess: (state, action) => {
      state.login = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.login = false;
      state.user = null;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setShoes: (state, action) => {
      state.shoes = action.payload;
    },
    setClothes: (state, action) => {
      state.clothes = action.payload;
    },
  },
});

// Asynchronous actions (thunks)
export const addUser = (name, price, description, image, selectedValue, inputValue) => async (dispatch) => {
  try {
    const user = await firebase.auth();
    const data = {
      name,
      price,
      description,
      image,
      category: selectedValue,
      phoneNumber: inputValue,
    };
    await firebase.firestore().collection('products').add(data);
    dispatch(loginSuccess(user));
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const getProducts = () => async (dispatch) => {
    try {
      const collectionRef = db.collection('products'); // Ensure db is correctly initialized
  
      const snapshot = await collectionRef.get();
      const products = snapshot.docs.map((doc) => doc.data());
      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

// export const getProducts = () => async (dispatch) => {
//     try {
//       const usersRef = db.collection('products');
//       console.log(db,"ee")
//       const snapshot = await usersRef.get();
//       const products = snapshot.docs.map((doc) => doc.data());
//       dispatch(setProducts(products));
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

export const getShoes = () => async (dispatch) => {
  try {
    const usersRef = db.collection('products');
    const snapshot = await usersRef.where('category', '==', 'shoes').get();
    const shoes = snapshot.docs.map((doc) => doc.data());
    dispatch(setShoes(shoes));
  } catch (error) {
    console.error('Error fetching shoes:', error);
  }
};

export const getClothes = () => async (dispatch) => {
  try {
    const usersRef = db.collection('products');
    const snapshot = await usersRef.where('category', '==', 'clothes').get();
    const clothes = snapshot.docs.map((doc) => doc.data());
    dispatch(setClothes(clothes));
  } catch (error) {
    console.error('Error fetching clothes:', error);
  }
};

export const {
    loggedIn,
    // addUser,
    getUser,
    loggedOut,
    loginError,
    setProducts,
    setShoes,
    setClothes,
  } = userSlice.actions;
  
  export default userSlice.reducer;
