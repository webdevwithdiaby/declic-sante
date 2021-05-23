import { IconButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';

const ToggleMenu = props => {
  return (
    <IconButton
      display={{ base: 'block', md: 'none' }}
      {...props}
      icon={<AiOutlineMenu />}
    />
  );
};

export default ToggleMenu;
