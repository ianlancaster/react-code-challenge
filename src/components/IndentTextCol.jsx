import { Col, Form, InputGroup } from 'react-bootstrap';
import Icon from './Icon';
import React from 'react';

const IndentTextCol = props => (
  <Col>
    <InputGroup>
      <InputGroup.Prepend style={{ width: 30, marginTop: 10 }}>
        <Icon icon="indent" />
      </InputGroup.Prepend>
      <Form.Control {...props}/>
    </InputGroup>
  </Col>
);

export default IndentTextCol
