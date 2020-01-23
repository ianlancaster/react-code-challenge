import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLevelUpAlt,
  faMinusCircle,
  faPlus,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

library.add(faLevelUpAlt, faMinusCircle, faPlus, faSmile);

const getIconProps = icon => {
  switch (icon) {
    case 'add':
      return {
        icon: 'plus',
      };
    case 'indent':
      return {
        icon: 'level-up-alt',
        rotation: 90,
      };
    case 'remove':
      return {
        icon: 'minus-circle',
      };
    case 'smile':
      return {
        icon: 'smile',
      };
    default:
      return {};
  }
};

const Icon = props => {
  const iconProps = getIconProps(props.icon);

  return <FontAwesomeIcon {...iconProps} style={props.style} />;
};

export default Icon;
