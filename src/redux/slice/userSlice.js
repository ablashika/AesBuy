import { createSlice } from '@reduxjs/toolkit';
import { db,auth, addDoc, collection, getDoc} from '../../firebase/firebase';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: false,
    user: null,
    error: {},
    products: [],
    shoes: [],
    clothes: [],
    selectedItems: [],
    loading:false
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
          state.products.push(action.payload);
      },

        setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },


    addToSelectedItems: (state, action) => {
      const itemId = action.payload;
      const item = state.products.find((item) => item.id === itemId);
   
      // console.log(item, "ss");
    
      if (item) {

        if (!state.selectedItems.find((selectedItem) => selectedItem.id === itemId)) {
          state.selectedItems = [...state.selectedItems, item];console.log(state.selectedItems, "Updated selectedItems");
        } else {
          state.selectedItems = state.selectedItems.filter((selectedItem) => selectedItem.id !== itemId);
         
        }
      } else {
        console.log("Item not found in products");
      }
    },

  
  },
  


});



export const addUser = (name, price, description, image, selectedValue, inputValue) => async (dispatch) => {
  try {
    const user = auth.currentUser; // Use the initialized auth object
    const data = {
      name:name,
      price:price,
      description:description,
      image: image,
       category: selectedValue,
       phoneNumber: inputValue,
       id: Math.random() * 10000,
    };

    // Use addDoc() and wait for the Promise to resolve
    const docRefPromise = addDoc(collection(db, 'products'), data);
    const docRef = await docRefPromise;

    // Access the ID using docRef.id
    dispatch(addUser(user, docRef.id));
  } catch (error) {
    console.error('Error adding user:', error);
  }
};


export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(false));
    try {
     
      const collectionRef = db.collection('products'); // Ensure db is correctly initialize
      const snapshot = await collectionRef.get();
      const products = snapshot.docs.map((doc) => doc.data());
      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
   finally {
    dispatch(setLoading(false)); // Set loading to false whether successful or not
  }
  };



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
    setSelectedItems,
    addToSelectedItems,
    removeFromSelectedItems,
    setLoading
  } = userSlice.actions;



export const selectSelectedItems = (state) => state.user.selectedItems;



  export default userSlice.reducer;
