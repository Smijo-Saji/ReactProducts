import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar className="bg-primary p-2">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home" className="d-flex">
              <img
                alt=""
                src="https://i.postimg.cc/8cYrbJpc/360-F-293946613-xow-WOMY3-AWl-VVXe-Qt-Zxvm-JYBr3w-Re-YUR-removebg-preview.png"
                width="35"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              <h3 className="text-white ms-2">
                <b>
                  {" "}
                  <i>Shop_Eazy</i>
                </b>
              </h3>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
