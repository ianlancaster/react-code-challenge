import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import uuidv4 from 'uuid/v4'

import 'bootstrap/dist/css/bootstrap.css';
import './App.styles.css';

import EditTractOwnership from '../routes/EditTractOwnership'
import Icon from '../components/Icon'

const tractOwnerships = [{
  id: uuidv4(),
  owner: "Luke Skywalker",
  interest: 0.5,
  lease: "Tatooine Lease",
  npris: [{
    id: uuidv4(),
    owner: "Leia Organa",
    interest: 0.45
  }, {
    id: uuidv4(),
    owner: "Han Solo",
    interest: 0.15
  }]
}]

function AppComponent() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Landdox Code Challenge <Icon icon="smile" /></h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditTractOwnership value={tractOwnerships} />
        </Col>
      </Row>
    </Container>
  );
}

export default AppComponent;
