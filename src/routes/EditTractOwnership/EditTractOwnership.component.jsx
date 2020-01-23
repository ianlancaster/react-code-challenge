import React, { useEffect, useState } from 'react';
import {
  Container,
  Row as BaseRow,
  Col,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap'
import uuidv4 from 'uuid/v4';
import IconButton from '../../components/IconButton';
import Icon from '../../components/Icon';

const EditTractOwnership = ({ value = [], onChange = () => { } }) => {
  const [data, setData] = useState(value)

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
    <Row
      key={`npri-${id}`}
      data-testid={`npri-${id}`}
    >
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

  const MineralInterest = ({ id, owner, interest, lease, npris = [] }) => (
    <>
      <Row
        key={`mineralInterest-${id}`}
        data-testid={`mineralInterest-${id}`}
      >
        <TextCol
          placeholder="Owner"
          value={owner}
        />
        <PercentCol
          placeholder="Mineral Interest"
          value={interest}
        />
        <Col/>
        <TextCol
          placeholder="Lease"
          value={lease}
        />
        <ButtonCol>
          <Icon icon="remove" />
        </ButtonCol>
      </Row>
      {npris.map(npri => <NPRI {...npri}/>)}
      <Row
        key={`addNpri-${id}`}
        id={`addNpri-${id}`}
      >
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
    npris: []
  });

  const handleAddMineralInterest = () => {
    setData([
      ...data,
      createEmptyMineralInterest()
    ]);
  };

  useEffect(() => {
    onChange(data)
  });

  return (
    <Form>
      <Container>
        <TableHeader />
        {data.map(mineralInterest => <MineralInterest {...mineralInterest} />)}
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
