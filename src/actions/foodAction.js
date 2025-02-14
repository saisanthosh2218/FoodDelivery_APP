import axios from "axios";

const FETCH_FOOD_ITEMS_SUCCESS = "FETCH_FOOD_ITEMS_SUCCESS";
const FETCH_FOOD_ITEMS_FAILURE = "FETCH_FOOD_ITEMS_FAILURE";

export const fetchFoodItems = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://yummy-food-i1el.onrender.com/api/foodItems"
    );
    const foodItems = response.data.data;

    // console.log(foodItems);

    dispatch({ type: FETCH_FOOD_ITEMS_SUCCESS, payload: foodItems });
  } catch (error) {
    dispatch({ type: FETCH_FOOD_ITEMS_FAILURE, payload: error.message });
  }
};
