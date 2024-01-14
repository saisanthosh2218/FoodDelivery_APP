import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartId = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemAdded, setItemAdded] = useState("");

  const addToCartHandler = () => {
    const newItem = {
      id: location.state.id,
      itemName: location.state.itemName,
      price: parseFloat(location.state.price) || 0,
      quantity: 1,
      image: location?.state?.itemImg,
    };

    const storedCart = localStorage.getItem("cart");
    const existingCart = storedCart ? JSON.parse(storedCart) : [];

    const isDuplicate = existingCart.some((item) => item.id === newItem.id);

    if (!isDuplicate) {
      dispatch(addToCart(newItem));

      const updatedCart = [...existingCart, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      navigate(`/Cart`);
    } else {
      setItemAdded(
        "Item Has Already Added Into Your Cart. Please Check Your Cart"
      );
    }
  };

  return (
    <div>
      <Card className="w-25 mt-3 mb-3">
        <Card.Img variant="top" src={location?.state?.itemImg} />
        <Card.Body>
          <Card.Title>
            <b>{location?.state?.itemName}</b>{" "}
          </Card.Title>
          <Card.Text style={{ textTransform: "capitalize" }}>
            {location?.state?.itemDes}
          </Card.Text>
          <Card.Text className="fw-bold">₹{location?.state?.price}</Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
        {itemAdded}
      </p>
    </div>
  );
};

export default CartId;
