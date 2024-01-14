import axios from "axios";

const FETCH_FOOD_ITEMS_SUCCESS = "FETCH_FOOD_ITEMS_SUCCESS";
const FETCH_FOOD_ITEMS_FAILURE = "FETCH_FOOD_ITEMS_FAILURE";

export const fetchFoodItems = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://yummy-food-xup0.onrender.com/api/foodItems"
    );
    const foodItems = response.data.data;

    dispatch({ type: FETCH_FOOD_ITEMS_SUCCESS, payload: foodItems });
  } catch (error) {
    dispatch({ type: FETCH_FOOD_ITEMS_FAILURE, payload: error.message });
  }
};
