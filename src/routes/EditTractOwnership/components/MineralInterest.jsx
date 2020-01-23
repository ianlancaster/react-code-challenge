import React from 'react';
import uuidv4 from 'uuid/v4';
import { Col } from 'react-bootstrap';
import Icon from '../../../components/Icon';
import IconButton from '../../../components/IconButton';
import Row from '../../../components/Row'
import PercentCol from '../../../components/PercentCol'
import ButtonCol from '../../../components/ButtonCol'
import TextCol from '../../../components/TextCol'
import NPRI from './NPRI';

const MineralInterest = ({ id, owner, interest, lease, npris, setData, data }) => {
  const handleMineralInterestChange = (id, field) => ({ target: { value }}) => {
    setData(data.set(id, {
      ...data.get(id),
      [field]: value
    }))
  };

  const createEmptyNpri = () => ({
    id: uuidv4(),
    owner: '',
    interest: ''
  });

  const handleAddNpri = () => {
    const mineralInterest = data.get(id);
    const npri = createEmptyNpri();
    setData(data.set(id, {
      ...mineralInterest,
      npris: mineralInterest.npris.set(npri.id, npri)
    }))
  };

  const handleRemoveMineralInterest = () => {
    setData(data.delete(id))
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
        <ButtonCol
          data-testid={`mineralInterest-${id}.remove`}
          onClick={handleRemoveMineralInterest}
        >
          <Icon icon="remove" />
        </ButtonCol>
      </Row>
      {npris.entrySeq().map(([key, value]) => (
        <NPRI
          key={key}
          parentId={id}
          data={data}
          setData={setData}
          {...value}
        />
      ))}
      <Row>
        <Col>
          <IconButton
            icon="add"
            onClick={handleAddNpri}
          >
            Add NPRI
          </IconButton>
        </Col>
      </Row>
    </>
  );
};

export default MineralInterest
