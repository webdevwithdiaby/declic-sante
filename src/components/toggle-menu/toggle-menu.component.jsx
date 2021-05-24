import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

const ToggleMenu = props => {
  return (
    <IconButton
      display={{ base: 'block', md: 'none' }}
      {...props}
      icon={<HamburgerIcon />}
    />
  );
};

export default ToggleMenu;
