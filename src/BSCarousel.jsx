import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const BSCarousel = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel variant="dark">
              {/* <Carousel slide={false}> no slide effect */}
              {/* <Carousel fade> for fade effect lyi */}
              <Carousel.Item interval={500}>
                {/* interval time period for carousel item slide */}
                <img src="image/logo1.png" alt="" />
                <Carousel.Caption>
                  <h3>First image</h3>
                  <p>Description of First Image</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img src="image/logo2.png" alt="" />
                <Carousel.Caption>
                  <h3>second image</h3>
                  <p>Description of Second Image</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BSCarousel;
