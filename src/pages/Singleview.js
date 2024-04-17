import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Singleview() {
  const [data, setData] = useState({});
  const { Id } = useParams();

  const disdata = async () => {
    const cardlist = await axios.get(`https://fakestoreapi.com/products/${Id}`);
    setData(cardlist.data);
  };
  useEffect(() => {
    disdata();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="my-5">
        <Container>
          {data.id ? (
            <Row>
              <Col>
                <div className="d-flex justify-content-center">
                  <img
                    src={data.image}
                    alt=""
                    className="rounded"
                    style={{ width: "18rem", height: "400px" }}
                  />
                </div>
              </Col>
              <Col>
                <div className="">
                  <h1>{data?.title}</h1>
                  <h3>{data?.category}</h3>
                  <h6>{data?.description}</h6>
                  <h1>{data?.price} $</h1>
                  <p>{Math.floor(data?.rating?.rate)}⭐⭐⭐⭐</p>
                  <div className="d-flex gap-4">
                    <Button variant="info">🛒 Add to Cart</Button>
                    <Button variant="success">⚡Buy Now</Button>
                  </div>
                </div>
              </Col>
            </Row>
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
        </Container>
      </div>
    </div>
  );
}

export default Singleview;
