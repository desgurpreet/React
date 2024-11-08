import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const GridBS = () => {
  return (
    <div>
      <Container fluid="lg">
        <Row className="text-center">
          <Col md={8} sm={6} xs={4}>
            <div className="bg-danger p-2">MY DIV</div>
          </Col>
          <Col md={2} sm={3} xs={4}>
            <div className="bg-primary p-2">MY DIV</div>
          </Col>
          <Col md={2} sm={3} xs={4}>
            <div className="bg-success p-2">MY DIV</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GridBS;
