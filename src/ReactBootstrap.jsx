import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ReactBootstrap = () => {
  // closing alert on x icon
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>My Name is:</Alert.Heading>
          <p>Gurpreet singh</p>
          <Alert.Link href="#">Click To Open This Link</Alert.Link>
        </Alert>
        {/* <Alert>
        <Alert.Heading>My Name is:</Alert.Heading>
        <p>Gurpreet singh</p>
        <Alert.Link href="#">Click To Open This Link</Alert.Link>
      </Alert>
      <Button variant="danger">one</Button>
      <Button variant="light">Two</Button>
      <Button variant="dark">Three</Button>
      <Button variant="warning">Four</Button>

      <Button variant="danger">one</Button>
      <Button variant="danger" active>
        one
      </Button>
      <Button variant="danger" disabled>
        one
      </Button>

      <Button variant="danger" size="lg">
        one
      </Button>
      <Button variant="danger" size="md">
        one
      </Button>
      <Button variant="danger" size="sm">
        one
      </Button> */}
      </div>
    );
  }
};
export default ReactBootstrap;
