export const addToCart = (foodItem) => {
  return {
    type: "ADD_TO_CART",
    payload: foodItem,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const incrementItem = (itemId) => {
  return {
    type: "INCREMENT_ITEM",
    payload: itemId,
  };
};

export const decrementItem = (itemId) => {
  return {
    type: "DECREMENT_ITEM",
    payload: itemId,
  };
};

export const clearCart = () => ({
  type: "CLEAR_CART",
});
