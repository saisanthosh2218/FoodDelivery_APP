import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setSignUpError } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const signUpError = useSelector((state) => state.auth.errors.signUpError);
  const navigate = useNavigate();

  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [check, setCheck] = useState(false);

  const handleCheckboxClick = () => {
    setCheck(!check);
    dispatch(setSignUpError(""));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (emailText && passwordText && check) {
      dispatch(setUser({ email: emailText, password: passwordText }));

      localStorage.setItem("emailText", emailText);
      localStorage.setItem("passwordText", passwordText);

      alert("You Have Successfully Signed In");
      navigate("/LoginPage");
    } else {
      let errorMessage = "";

      if (!check) {
        errorMessage = "Please check the checkbox. ";
      }

      if (!passwordText) {
        errorMessage = "Password should not be empty. ";
      }
      if (!emailText) {
        errorMessage = "Email should not be empty. ";
      }

      dispatch(setSignUpError(errorMessage));
    }
  };

  return (
    <div
      className="mb-5"
      style={{
        width: "450px",
        backgroundColor: "#333333",
        color: "#fff",
        padding: "20px",
        borderRadius: "8px",
        margin: "50px auto 15px",
      }}
    >
      <Form onSubmit={formSubmit} className="mb-5">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="mb-2"
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmailText(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPasswordText(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to all Terms & Conditions"
            id="checkboxx"
            checked={check}
            onChange={handleCheckboxClick}
            isInvalid={!check}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>

        {signUpError && (
          <p
            style={{
              color: "red",
              fontFamily: "serif",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {signUpError}
          </p>
        )}
      </Form>
    </div>
  );
};

export default SignUpPage;
