import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mynavbar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
              <Container>
                <Navbar.Brand href="#">
                  <img src="image/logo2.png" height="50" width="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link href="#" className="custom-title">
                      Home
                    </Nav.Link>
                    <NavDropdown
                      title={<span className="custom-title">Services</span>}
                      className="custom-dropdown"
                      id="my-nav"
                    >
                      <NavDropdown.Header>Heading 1</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Header>Heading 2</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className="custom-title">
                      About
                    </Nav.Link>
                    <Nav.Link href="#" className="custom-title">
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Navbar.Text>Sign in here</Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mynavbar;
