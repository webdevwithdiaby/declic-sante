import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import NavLink from '../nav-link/nav-link.component';

const DesktopNav = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }} flex="1">
      <HStack spacing="3">
        <NavLink color="white">Calculatrice</NavLink>
        <NavLink color="white">Mode Operatoires</NavLink>
      </HStack>
    </Box>
  );
};

export default DesktopNav;
