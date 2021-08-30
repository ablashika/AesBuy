const initialState = {
  login: false,
  user: null,
  error: {},
  products: [],
  shoes: [],
  clothes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, login: true, user: action.payload };

    case "ADD_USER":
      return { ...state, login: true, user: action.payload };

    case "GET_USER":
      return { ...state, login: true, user: action.payload };

    case "LOGGED_OUT":
      return { ...state, login: false, user: null };

    case "LOGIN_ERROR":
      return {
        ...state,
        error: { login: action.payload },
      };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_SHOES":
      return { ...state, shoes: action.payload };

    case "SET_CLOTHES":
      return { ...state, clothes: action.payload };

    default:
      return state;
  }
};
