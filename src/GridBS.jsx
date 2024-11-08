import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const GridBS = () => {
  return (
    <div>
      <Container fluid="lg">
        <Row className="text-center">
          <Col md={{ offset:2, span: 6 }}>
          {/* span mean strech col like col md={4}
          if apply md={{span:6}} col strech on number 6 takk*/}
          {/* <Col md={{ offset: 4 }}> */}
          {/*for getting space from left side */}
            <div className="bg-danger p-2">MY DIV</div>
          </Col>
          <Col>
            <div className="bg-primary p-2">MY DIV</div>
          </Col>
          <Col>
            <div className="bg-success p-2">MY DIV</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GridBS;
