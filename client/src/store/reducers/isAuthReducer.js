const initialState = {
  isAuth: false,
};

const isAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_FALSE':
      return {
        isAuth: action.payload,
      };
    case 'SET_AUTH_TRUE':
      return {
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export default isAuthReducer;
