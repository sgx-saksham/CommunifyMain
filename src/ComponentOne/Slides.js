import React from "react";
import { Carousel } from "react-bootstrap";

function Slides() {
  return (
    <div>
      <Carousel fade={true}>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chat Messanger</h3>
            <p>
              For those who want to share the results of their code then and
              their{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>A complete community for CS enthusiasts</h3>
            <p>this community helps cs background.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>IDE and Compiler Support</h3>
            <p>this is our compiler and ide section</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Multi Purpose Calculator</h3>
            <p>
              For Different Types of problem we require different solutions,
              calculators helps in giving ease to them{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slides;
