import { Col } from 'react-bootstrap';
import Icon from '../../../components/Icon';
import React from 'react';
import Row from '../../../components/Row'
import IndentTextCol from '../../../components/IndentTextCol'
import PercentCol from '../../../components/PercentCol'
import ButtonCol from '../../../components/ButtonCol'

const NPRI = ({ id, owner, interest }) => (
  <Row data-testid={`npri-${id}`}>
    <IndentTextCol
      value={owner}
      placeholder="Owner"
    />
    <Col/>
    <PercentCol
      placeholder="NPRI"
      value={interest}
    />
    <Col />
    <ButtonCol>
      <Icon icon="remove" />
    </ButtonCol>
  </Row>
);

export default NPRI
