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

const EditTractOwnership = ({ value = [], onChange = () => { } }) => {
  const dataMap = Map(value.map(mi => [
    mi.id,
    {
      ...mi,
      npris: Map((mi.npris || []).map(npri => [npri.id, npri]))
    }
  ]));

  const [data, setData] = useState(dataMap);

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

  const handleMineralInterestChange = (id, field) => e => {
    console.log(e.target.value)
  };

  const MineralInterest = ({ id, owner, interest, lease, npris }) => (
    <>
      <Row data-testid={`mineralInterest-${id}`}>
        <TextCol
          placeholder="Owner"
          onChange={handleMineralInterestChange(id, 'owner')}
          data-testid={`mineralInterest-${id}.owner`}
          value={owner}
        />
        <PercentCol
          placeholder="Mineral Interest"
          data-testid={`mineralInterest-${id}.interest`}
          value={interest}
        />
        <Col/>
        <TextCol
          placeholder="Lease"
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

  const TableHeader = () => (
    <Row>
      <Col>Owner</Col>
      <Col>Mineral Interest</Col>
      <Col>NPRI</Col>
      <Col>Lease</Col>
      <Col xs={1} />
    </Row>
  );

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

  useEffect(() => {
    onChange(data.toArray().map(mi => ({
      ...mi[1],
      npris: mi[1].npris.toArray().map(npri => npri[1])
    })))
  });

  return (
    <Form>
      <Container>
        <TableHeader />
        {data.entrySeq().map(([key, value]) => (
          <MineralInterest key={key} {...value} />
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
