const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    };
  } else if (action.type === "INCREMENT_ITEM") {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else if (action.type === "DECREMENT_ITEM") {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    };
  } else if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: [],
    };
  } else {
    return state;
  }
};

export default cartReducer;
