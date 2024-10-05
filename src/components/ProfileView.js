import { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { CardText, CardTitle, CardBody, Table } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProfileView() {
  const { user } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState("");
  const [orders, setOrders] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  function handleMouseMove(e) {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users/details`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFullName(`${data.firstName} ${data.lastName}`);
        setEmail(data.email);
        setMobile(data.mobileNo);
        setImage(data.image);
        console.log(data);
      });
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/order/my-orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
        console.log(data.orders);
      });
  });

  return (
    <Container className="my-5 py-5">
      <Row>
        <Col>
          <motion.div
            className="profile-card position-relative mx-auto p-3"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
            >
              {user !== null ? (
                <>
                  <CardTitle className="fw-bolder text-white mb-2 fs-2 px-2">
                    {fullName}
                  </CardTitle>
                  <Image
                    className="profile-image"
                    src={image}
                    fluid
                    height={250}
                  />
                  <CardBody>
                    <CardText className="fw-bolder text-white fs-4 px-2 pt-2">
                      Email: {email}
                    </CardText>
                    <CardText className="fw-bolder text-white fs-4 px-2">
                      Mobile: {mobile}
                    </CardText>
                  </CardBody>
                </>
              ) : (
                <Navigate to="/" />
              )}
            </div>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-5">
        <h1 className="fw-bolder fs-1">My Orders</h1>
        <Table className="mb-5" hover>
          <thead>
            <tr>
              <th className="text-center">Order Date</th>
              <th className="text-center">Customer Name</th>
              <th className="text-center">Products</th>
              <th className="text-center">Status</th>
              <th className="text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const date = new Date(order.orderedOn).toLocaleDateString(
                "en-US"
              );
              return (
                <tr className="text-center" key={order._id}>
                  <td>{date}</td>
                  <td>{order.userId}</td>
                  <td>
                    {order.productsOrdered.map((product) => {
                      return <div>{product.productId}</div>;
                    })}
                  </td>
                  <td>{order.status}</td>
                  <td>&#x20B1;{order.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
