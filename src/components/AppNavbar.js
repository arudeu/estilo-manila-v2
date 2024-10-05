import { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Badge } from "react-bootstrap";

export default function NavigationBar() {
  const { user } = useContext(UserContext);
  const [cartNumber, setCartNumber] = useState(0);

  async function getNumberCart() {
    if (user.id !== null && !typeof cartNumber === "undefined") {
      await fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/get-cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCartNumber(data.cartItems.length);
        });
    }
  }

  useEffect(() => {
    getNumberCart();
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo-image"
            className="d-inline-block align-top"
            src="/Logo/estilo-manila.png"
            width={100}
            height={35}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              Products
            </Nav.Link>
            {user.id !== null ? (
              <div className="d-flex justify-content-end ms-auto">
                <Nav.Link as={NavLink} to="/cart" exact="true">
                  <RiShoppingBagLine className="me-1" id="user-icon" />
                  <sup>
                    <Badge pill bg="dark">
                      {typeof cartNumber !== "undefined" ? cartNumber : 0}
                    </Badge>
                  </sup>
                </Nav.Link>
                <NavDropdown
                  title={<FaRegUserCircle id="user-icon" />}
                  id="basic-nav-dropdown "
                >
                  <Nav.Link as={NavLink} to="/profile" exact="true">
                    Profile
                  </Nav.Link>
                  {user.isAdmin === true ? (
                    <Nav.Link as={NavLink} to="/admin" exact="true">
                      Admin
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>{" "}
                </NavDropdown>
              </div>
            ) : (
              <NavDropdown
                title={<FaRegUserCircle id="user-icon" />}
                className="justify-content-end ms-auto"
                id="basic-nav-dropdown "
              >
                <NavDropdown.Item as={NavLink} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
