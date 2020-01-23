import { Col } from 'react-bootstrap';
import React from 'react';
import Row from '../../../components/Row'

const TableHeader = () => (
  <Row>
    <Col>Owner</Col>
    <Col>Mineral Interest</Col>
    <Col>NPRI</Col>
    <Col>Lease</Col>
    <Col xs={1} />
  </Row>
);

export default TableHeader
