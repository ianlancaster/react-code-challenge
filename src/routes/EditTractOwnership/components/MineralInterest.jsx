import { Col } from 'react-bootstrap';
import Icon from '../../../components/Icon';
import IconButton from '../../../components/IconButton';
import Row from '../../../components/Row'
import PercentCol from '../../../components/PercentCol'
import ButtonCol from '../../../components/ButtonCol'
import TextCol from '../../../components/TextCol'
import NPRI from './NPRI';
import React from 'react';

const MineralInterest = ({ id, owner, interest, lease, npris, setData, data }) => {
  const handleMineralInterestChange = (id, field) => ({ target: { value }}) => {
    setData(data.set(id, {
      ...data.get(id),
      [field]: value
    }))
  };

  return (
    <>
      <Row
        data-testid={`mineralInterest-${id}`}
        key={`mineralInterest-${id}`}
      >
        <TextCol
          placeholder="Owner"
          onChange={handleMineralInterestChange(id, 'owner')}
          data-testid={`mineralInterest-${id}.owner`}
          key={`mineralInterest-${id}.owner`}
          value={owner}
        />
        <PercentCol
          placeholder="Mineral Interest"
          onChange={handleMineralInterestChange(id, 'interest')}
          data-testid={`mineralInterest-${id}.interest`}
          value={interest}
        />
        <Col/>
        <TextCol
          placeholder="Lease"
          onChange={handleMineralInterestChange(id, 'lease')}
          data-testid={`mineralInterest-${id}.lease`}
          value={lease}
        />
        <ButtonCol>
          <Icon icon="remove" />
        </ButtonCol>
      </Row>
      {npris.entrySeq().map(([key, value]) => <NPRI key={key} {...value}/>)}
      <Row>
        <Col>
          <IconButton icon="add">Add NPRI</IconButton>
        </Col>
      </Row>
    </>
  );
};

export default MineralInterest
