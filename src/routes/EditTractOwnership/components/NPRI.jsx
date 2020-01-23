import { Col } from 'react-bootstrap';
import Icon from '../../../components/Icon';
import React from 'react';
import Row from '../../../components/Row'
import IndentTextCol from '../../../components/IndentTextCol'
import PercentCol from '../../../components/PercentCol'
import ButtonCol from '../../../components/ButtonCol'

const NPRI = ({ id, owner, interest, parentId, data, setData }) => {
  const handleNpriChange = (parentId, id, field) => ({ target: { value }}) => {
    const mineralInterest = data.get(parentId);
    setData(data.set(parentId, {
      ...mineralInterest,
      npris: mineralInterest.npris.set(id, {
        ...mineralInterest.npris.get(id),
        [field]: value
      })
    }))
  };

  const handleRemoveNpri = () => {
    const mineralInterest = data.get(parentId);
    setData(data.set(parentId, {
      ...mineralInterest,
      npris: mineralInterest.npris.delete(id)
    }))
  };

  return (
    <Row data-testid={`npri-${id}`}>
      <IndentTextCol
        value={owner}
        data-testid={`npri-${id}.owner`}
        onChange={handleNpriChange(parentId, id, 'owner')}
        placeholder="Owner"
      />
      <Col/>
      <PercentCol
        placeholder="NPRI"
        data-testid={`npri-${id}.interest`}
        onChange={handleNpriChange(parentId, id, 'interest')}
        value={interest}
      />
      <Col />
      <ButtonCol
        data-testid={`npri-${id}.remove`}
        onClick={handleRemoveNpri}
      >
        <Icon icon="remove" />
      </ButtonCol>
    </Row>
  );
};

export default NPRI
