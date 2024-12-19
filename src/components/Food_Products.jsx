import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../actions/authActions";
import { fetchFoodItems } from "../actions/foodAction";
import { clearCart } from "../actions/cartActions";

const Food_Products = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user?.username);
  const navigate = useNavigate();
  const foodItems = useSelector((state) => state.food.items);
  const errortext = useSelector((state) => state.food.error);

  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFindItemClicked, setIsFindItemClicked] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleLogout = () => {
    localStorage.removeItem("emailText");
    localStorage.removeItem("passwordText");
    dispatch(setUser(null));
    dispatch(clearCart());

    alert("You Are Successfully Logged Out");
    navigate("/");
  };

  useEffect(() => {
    setLoading(true); // Show loader when fetching starts
    fetchFoodItems(dispatch).finally(() => {
      setLoading(false); // Hide loader when fetching is complete
    });
  }, [dispatch]);

  const handleFindItemClick = () => {
    setIsFindItemClicked(true);
    setFilteredItems(
      foodItems.filter((item) =>
        item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSelectedCategory("All Items");
    closeNavbar();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFindItemClicked(false);
    setFilteredItems([]);
    closeNavbar();
  };

  const showAllItems = () => {
    setSelectedCategory("All Items");
    setIsFindItemClicked(false);
    setFilteredItems([]);
    closeNavbar();
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div>
      <Container className="mb-5" style={{ height: "100%" }}>
        <h1 style={{ textAlign: "center", marginTop: "8px" }}>
          Welcome To Our App {username}!
        </h1>
        <h1
          style={{
            color: "yellow",
            textAlign: "center",
            background: "linear-gradient(45deg,#87ceeb,#001f3f",
            borderRadius: "5px",
            marginTop: "8px",
            padding: "5px",
            fontFamily: "cursive",
          }}
        >
          Our Popular Foods
        </h1>
        <h4
          style={{
            textAlign: "center",
            marginTop: "8px",
            fontWeight: "bold",
          }}
        >
          {errortext}
        </h4>
        <div className="d-flex justify-content-end mt-2 mb-2">
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Navbar bg="light" expand="lg" className="mb-5 mt-5">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
            style={{ boxShadow: "none" }}
          >
            {isNavbarOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Button
                  className="mt-2 mb-2 me-2"
                  variant={
                    selectedCategory === "All Items"
                      ? "primary"
                      : "outline-secondary"
                  }
                  onClick={showAllItems}
                  style={{ outline: "none" }}
                >
                  Menu
                </Button>
              </Nav.Item>
              {foodItems &&
                [...new Set(foodItems.map((item) => item.category))].map(
                  (category) => (
                    <Nav.Item
                      key={category}
                      eventKey={category}
                      onClick={() => handleCategoryChange(category)}
                      className="mb-2 mt-2 ms-2"
                    >
                      <Button
                        variant={
                          selectedCategory === category
                            ? "success"
                            : "outline-secondary"
                        }
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </Button>{" "}
                    </Nav.Item>
                  )
                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="mb-3 mt-3 m-auto w-50 d-flex ">
          <input
            className="rounded border border-lightblue"
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />

          <Button
            variant="info"
            className="ms-2 w-25"
            onClick={handleFindItemClick}
          >
            Find Item
          </Button>
        </div>

        {loading ? ( // Show spinner if loading
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row
            xs={1}
            md={2}
            lg={3}
            xl={5}
            className="g-4"
            style={{ flex: 1, overflowY: "auto" }}
          >
            {isFindItemClicked
              ? filteredItems.map((foodItem) => (
                  <Col
                    key={foodItem.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Card
                      style={{
                        width: "100%",
                        height: "100%",
                        aspectRatio: "2/5",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={foodItem.img}
                        style={{ objectFit: "cover", height: "50%" }}
                      />
                      <Card.Body
                        style={{
                          height: "auto",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Card.Title style={{ textAlign: "center" }}>
                            {foodItem.itemName}
                          </Card.Title>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Card.Text>
                            <b>Price: ₹{foodItem.price}</b>
                          </Card.Text>
                          <Card.Text>
                            <b style={{ textTransform: "capitalize" }}>
                              {foodItem.description}
                            </b>
                          </Card.Text>
                          <Button
                            className="mt-2"
                            variant="warning"
                            onClick={() =>
                              navigate(`/Food_Products/${foodItem?.id}`, {
                                state: {
                                  price: foodItem?.price,
                                  id: foodItem?.id,
                                  itemName: foodItem?.itemName,
                                  itemImg: foodItem?.img,
                                  itemDes: foodItem?.description,
                                },
                              })
                            }
                          >
                            Order Now
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : foodItems
                  .filter(
                    (item) =>
                      selectedCategory === "All Items" ||
                      item.category === selectedCategory
                  )
                  .map((foodItem) => (
                    <Col
                      key={foodItem.id}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card
                        style={{
                          width: "100%",
                          height: "100%",
                          aspectRatio: "2/5",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={foodItem.img}
                          style={{ objectFit: "cover", height: "50%" }}
                        />
                        <Card.Body
                          style={{
                            height: "auto",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <Card.Title style={{ textAlign: "center" }}>
                              {foodItem.itemName}
                            </Card.Title>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <Card.Text>
                              <b>Price: ₹{foodItem.price}</b>
                            </Card.Text>
                            <Card.Text>
                              <b style={{ textTransform: "capitalize" }}>
                                {foodItem.description}
                              </b>
                            </Card.Text>
                            <Button
                              className="mt-2"
                              variant="warning"
                              onClick={() =>
                                navigate(`/Food_Products/${foodItem?.id}`, {
                                  state: {
                                    price: foodItem?.price,
                                    id: foodItem?.id,
                                    itemName: foodItem?.itemName,
                                    itemImg: foodItem?.img,
                                    itemDes: foodItem?.description,
                                  },
                                })
                              }
                            >
                              Order Now
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Food_Products;
