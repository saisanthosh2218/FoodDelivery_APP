const initialState = {
  items: [],
  error: null,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FOOD_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    case "FETCH_FOOD_ITEMS_FAILURE":
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
