import { createSlice } from '@reduxjs/toolkit';
import { db,auth } from '../../firebase/firebase';

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
    addUser: (state, action) => {
        // You can update your state with the new user data here
          state.products.push(action.payload);
      },
  },
});

// Asynchronous actions (thunks)

export const addUser = (name, price, description, image, selectedValue, inputValue) => async (dispatch) => {
    try {
      const user = auth; // Use the initialized auth object
      const data = {
        name,
        price,
        description,
        image,
        category: selectedValue,
        phoneNumber: inputValue,
      };
      await db.collection('products').add(data); // Use db from your initialized Firebase
      dispatch(addUser(user));
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
    addUsers,
    getUser,
    loggedOut,
    loginError,
    setProducts,
    setShoes,
    setClothes,
  } = userSlice.actions;
  
  export default userSlice.reducer;
