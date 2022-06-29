import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import logo1 from "../assets/logo/6.png";
import "../Style/slideshow.css";

const Slidshow = () => {
  return (
    <div className="home">
      <div>
        <Navbar variant="dark" className="homenav">
          <Container>
            <Navbar.Brand className="Nav">
              <img
                alt="AMAZON.GO"
                src={logo1}
                width="100%"
                height=""
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <div className="login">
              <Link to={"/login"}>Login</Link>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="carousal">
        <Carousel variant="dark">
          {/* <Carousel.Item>
        <img
          className="slideshow"
          src={image1}
          alt="First slide"
         
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}

          {/* </Carousel.Item> */}
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slidshow;
