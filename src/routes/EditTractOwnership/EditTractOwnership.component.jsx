import React, { useEffect, useState } from 'react';
import {
  Container,
  Col,
  Form,
} from 'react-bootstrap'
import { Map } from 'immutable'
import uuidv4 from 'uuid/v4';
import IconButton from '../../components/IconButton';
import Row from '../../components/Row';
import TableHeader from './components/TableHeader';
import MineralInterest from './components/MineralInterest';

const EditTractOwnership = ({ value = [], onChange = () => { } }) => {
  const dataMap = Map(value.map(mi => [
    mi.id,
    {
      ...mi,
      npris: Map((mi.npris || []).map(npri => [npri.id, npri]))
    }
  ]));

  const [data, setData] = useState(dataMap);

  useEffect(() => {
    const normalizedData = data.toArray().map(mi => ({
      ...mi[1],
      npris: mi[1].npris.toArray().map(npri => npri[1])
    }));
    // debugger
    onChange(normalizedData)
  });

  const createEmptyMineralInterest = () => ({
    id: uuidv4(),
    owner: '',
    interest: '',
    lease: '',
    npris: Map([])
  });

  const handleAddMineralInterest = () => {
    const mi = createEmptyMineralInterest();
    setData(data.set(mi.id, mi));
  };

  return (
    <Form>
      <Container>
        <TableHeader />
        {data.entrySeq().map(([key, value]) => (
          <MineralInterest
            key={key}
            data={data}
            setData={setData}
            {...value}
          />
        ))}
        <Row>
          <Col>
            <IconButton
              icon="add"
              onClick={handleAddMineralInterest}
            >
              Add Mineral Interest
            </IconButton>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default EditTractOwnership;
