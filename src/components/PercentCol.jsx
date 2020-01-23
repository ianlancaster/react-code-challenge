import { Col, Form, InputGroup } from 'react-bootstrap';
import React from 'react';

const PercentCol = props => (
  <Col>
    <InputGroup>
      <Form.Control {...props} />
      <InputGroup.Append>
        <InputGroup.Text>%</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  </Col>
);

export default PercentCol
