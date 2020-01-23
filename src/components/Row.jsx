import { Row as BaseRow } from 'react-bootstrap';
import React from 'react';

const Row = props => (
  <BaseRow
    className="p-2"
    {...props}
  />
);

export default Row
