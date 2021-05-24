import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import NavLink from '../nav-link/nav-link.component';
import CalculatriceLink from '../links/calculatrice-link.component';

const DesktopNav = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }} flex="1">
      <HStack spacing="3">
        <CalculatriceLink>Calculatrice</CalculatriceLink>
        <NavLink color="white">Mode Operatoires</NavLink>
      </HStack>
    </Box>
  );
};

export default DesktopNav;
