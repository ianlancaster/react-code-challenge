import { Col, Form } from 'react-bootstrap';
import React from 'react';

const TextCol = props => (
  <Col>
    <Form.Control {...props}/>
  </Col>
);

export default TextCol
