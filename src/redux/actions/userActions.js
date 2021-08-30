import firebase from "../../firebase/firebase";
const db = firebase.firestore();

export function addUser(
  name,
  price,
  description,
  image,
  selectedValue,
  inputValue
) {
  const data = {
    name: name,
    price: price,
    description: description,
    image,
    category: selectedValue,
    phoneNumber: inputValue,
  };

  return async (dispatch) => {
    try {
      const user = await firebase.auth();
      firebase.firestore().collection("products").add(data);

      dispatch(addUsers(user));
    } catch (error) {
      console.log(error);
    }
    // console.log({ db });
  };
}

function addProduct(product) {
  return {
    type: "SET_PRODUCTS",
    payload: product,
  };
}

function addShoe(shoes) {
  return {
    type: "SET_SHOES",
    payload: shoes,
  };
}

function addClothes(clothes) {
  return {
    type: "SET_CLOTHES",
    payload: clothes,
  };
}

export async function getProducts(dispatch) {
  try {
    const usersRef = db.collection("products");
    const snapshot = await usersRef.get();
    let products = [];
    snapshot.forEach((doc) => {
      products.push(doc.data());
    });
    dispatch(addProduct(products));
  } catch (e) {
    console.log(e);
    setLoading(true);
  }
}

export async function getClothes(dispatch) {
  try {
    const usersRef = db.collection("products");
    const snapshot = await usersRef.where("category", "==", "clothes").get();
    let clothes = [];
    snapshot.forEach((doc) => {
      clothes.push(doc.data());
    });
    dispatch(addClothes(clothes));
  } catch (e) {
    console.log(e);
  }
}

export async function getShoes(dispatch) {
  try {
    const usersRef = db.collection("products");
    const snapshot = await usersRef.where("category", "==", "shoes").get();
    let shoes = [];
    snapshot.forEach((doc) => {
      shoes.push(doc.data());
    });
    dispatch(addShoe(shoes));
  } catch (e) {
    console.log(e);
  }
}

function addUsers(user) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}

// function getUsers(user) {
//   return {
//     type: "GET_USER",
//     payload: user,
//   };
// }

// export const addUser = (userName) => {
//     return db.collection('users')
//         .add({
//             created: firebase.firestore.FieldValue.serverTimestamp(),
//             users: [{ name: userName}]
//         });
// };
