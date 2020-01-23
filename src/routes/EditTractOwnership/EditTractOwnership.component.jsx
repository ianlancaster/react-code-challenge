import React, { useEffect, useState } from 'react';
import {
  Container,
  Row as BaseRow,
  Col,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap'
import { Map } from 'immutable'
import uuidv4 from 'uuid/v4';
import IconButton from '../../components/IconButton';
import Icon from '../../components/Icon';

const Row = props => (
  <BaseRow
    className="p-2"
    {...props}
  />
);

const TextCol = props => (
  <Col>
    <Form.Control {...props}/>
  </Col>
);

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

const ButtonCol = props => (
  <Col xs={1}>
    <Button variant="light" {...props} />
  </Col>
);

const TableHeader = () => (
  <Row>
    <Col>Owner</Col>
    <Col>Mineral Interest</Col>
    <Col>NPRI</Col>
    <Col>Lease</Col>
    <Col xs={1} />
  </Row>
);

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
