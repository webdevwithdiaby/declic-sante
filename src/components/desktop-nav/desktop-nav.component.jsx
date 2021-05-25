import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import CalculatriceLink from '../links/calculatrice-link.component';

const DesktopNav = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }} flex="1">
      <HStack spacing="3">
        <CalculatriceLink>Calculatrice</CalculatriceLink>
      </HStack>
    </Box>
  );
};

export default DesktopNav;
