import { Button, Col } from 'react-bootstrap';
import React from 'react';

const ButtonCol = props => (
  <Col xs={1}>
    <Button variant="light" {...props} />
  </Col>
);

export default ButtonCol
