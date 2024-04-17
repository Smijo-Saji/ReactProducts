import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

function Productlist() {
  const [products, setProducts] = useState([]);

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((data) => setProducts(data));
  // };

  //method using async await

  // const fetchData = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   data.json().then((data) => setProducts(data));
  // };

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <img
              src="https://i.postimg.cc/hGFWjwZ6/360-F-121128679-p-Mxky-QRw-MRFi-ZMru0n-G0b-Fwnxj5qt8k-Y-removebg-preview.png"
              alt=""
              className="w-100"
            />
          </Col>
          <Col lg={6}>
            <div className="d-flex flex-column  justify-content-center text-center align-items-center h-100">
              <i>
                <h2>
                  <b>Shop_Eazy.com</b>
                </h2>
              </i>
              <p>
                Shop_Eazy is India's largest Supply Chain company. Starting out
                in 2009 with an aim to fulfil the supply chain requirements of
                customers across India, we are today the preferred partner for
                various businesses with our consistent excellence in consumer
                experience, reliable delivery and managing variability at scale
              </p>
              <i>
                <h2>Happy Shopping !!</h2>
              </i>
            </div>
          </Col>
        </Row>
      </Container>

      {products.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly">
          {products.map((i) => (
            <Link to={`/single/${i.id}`} style={{ textDecoration: "none" }}>
              <Card
                style={{ width: "18rem", height: "537px" }}
                className="p-3 mb-3"
              >
                <Card.Img
                  variant="top"
                  src={i.image}
                  style={{ height: "280px" }}
                  className="rounded"
                />
                <Card.Body className="text-center">
                  <Card.Title>
                    {i.title.length > 38
                      ? i.title.slice(0, 38) + ".."
                      : i.title}
                  </Card.Title>
                  <p>{i.category}</p>
                  <h2>{i.price} $</h2>
                  <p>
                    Rating :
                    <span
                      className={
                        i.rating.rate > 4
                          ? "bg-success"
                          : i.rating.rate > 3
                          ? "bg-warning"
                          : "bg-danger"
                      }
                      style={{
                        padding: "0px 4px",
                        borderRadius: "5px",
                        marginLeft: "4px",
                      }}
                    >
                      {i.rating.rate}
                    </span>
                    ⭐
                  </p>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center ">
          {/* <i class="fa-solid fa-spinner fa-spin fa-6x"></i> */}
          <img
            src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
            alt=""
            style={{ height: "300px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Productlist;
