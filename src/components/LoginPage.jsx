import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoginError } from "../actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.errors.loginError);
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [username, setUsername] = useState(""); // New state for username

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmailText = localStorage.getItem("emailText");
    const storedPasswordText = localStorage.getItem("passwordText");

    if (!username || !emailText || !passwordText) {
      dispatch(setLoginError("All fields are required"));
      return;
    }

    if (emailText && passwordText) {
      console.log("Entered email:", emailText);
      console.log("Stored email:", location?.state?.emailText);
      console.log("Entered password:", passwordText);
      console.log("Stored password:", location?.state?.passwordText);

      if (
        storedEmailText === emailText &&
        storedPasswordText === passwordText
      ) {
        dispatch(
          setUser({ email: emailText, password: passwordText, username })
        );

        alert("You Have Successfully Logged In");
        navigate("/Food_Products");
      } else {
        dispatch(setLoginError("Invalid Email or Password. Please Register."));
      }
    }
    //  else {
    //   dispatch(setLoginError("All fields are required"));
    // }
  };

  return (
    <div>
      <div
        style={{
          width: "400px",
          backgroundColor: "#322929",
          color: "white",
          padding: "8px",
          borderRadius: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        <div style={{ width: "260px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailText">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmailText(e.target.value);
                }}
                value={emailText}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordText">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordText(e.target.value);
                }}
                value={passwordText}
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Log In
            </Button>
            <div>
              <p
                style={{
                  display: "block",
                  marginTop: "18px",
                  color: "red",
                }}
              >
                {loginError}
              </p>
            </div>
          </Form>
        </div>
      </div>
      <p
        style={{ textAlign: "center", marginTop: "20px", fontFamily: "serif" }}
      >
        Don't Have an Account <Link to="/SignUpPage">Register Here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
