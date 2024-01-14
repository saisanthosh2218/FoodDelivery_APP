import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../actions/cartActions";
import "../CSS/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleItemIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleItemDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Card className="mt-5 mb-5 card bg-light">
      <Card.Body>
        <Card.Title className="card-title">Your Cart</Card.Title>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item?.image} alt={item.itemName} className="item-image" />
            <div className="item-details">
              <Card.Text className="card-text">
                <strong>Item {index + 1}:</strong> {item.itemName}
              </Card.Text>
              <Card.Text className="card-text">
                <strong>Price:</strong> ₹{item.price}
              </Card.Text>
              <Card.Text className="card-text">
                <strong>Quantity:</strong> {item.quantity}
              </Card.Text>
              <Card.Text className="card-text">
                <strong>Total:</strong> ₹
                {(item.price * item.quantity).toFixed(2)}
              </Card.Text>
              <div className="button-container  mt-4">
                <Button
                  className="me-3 w-25"
                  variant="warning"
                  onClick={() => handleItemDecrement(item.id)}
                >
                  -
                </Button>
                <Button
                  className="w-25"
                  variant="success"
                  onClick={() => handleItemIncrement(item.id)}
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteItem(item.id)}
                  className="ms-3 w-25"
                >
                  Delete
                </Button>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <Card.Text className="total-price">
          <strong>Total Price:</strong> ₹{totalPrice}
        </Card.Text>
        <Button variant="primary" className="mt-3 ms-2">
          Checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
