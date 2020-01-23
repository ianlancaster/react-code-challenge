import React from 'react'
import { Button } from 'react-bootstrap';
import Icon from '../Icon';

const IconButton = props => (
 <Button
   variant="light"
   {...props}
 >
   <Icon
     icon={props.icon}
     style={{ marginRight: 10 }}
   />
   {props.children}
 </Button>
);

export default  IconButton
