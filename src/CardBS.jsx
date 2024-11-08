import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CardBS = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card bg="light" border="danger">
            <Card.Img src="image/logo2.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card text This is a Card textThis is a Card text This
                is a Card text This is a Card text This is a Card text
              </Card.Text>
              <Card.Link href="#">Click Here..</Card.Link>
              <div className="d-grid">
                <Button variant="light">Read More...</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" border="danger">
            <Card.Header>This is Card Header</Card.Header>
            <Card.Img src="image/logo1.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card text This is a Card textThis is a Card text This
                is a Card text This is a Card text This is a Card text
              </Card.Text>
              <div className="d-grid">
                <Button variant="danger">Read More...</Button>
              </div>
            </Card.Body>
            <Card.Footer>This is Card footer</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img src="image/logo1.png" />
            <Card.ImgOverlay>
                {/* imgoverlay for moving in backside of card text  */}
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card text This is a Card textThis is a Card text This
                is a Card text This is a Card text This is a Card text
              </Card.Text>
              <div className="d-grid">
                <Button variant="primary">Read More...</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardBS;
