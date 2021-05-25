import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

import CalculatriceLink from '../links/calculatrice-link.component';

const DrawerNav = props => {
  return (
    <Drawer {...props} display={{ base: 'block', md: 'none' }} placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" color="teal">
            DECLIC-SANTE
          </DrawerHeader>
          <DrawerBody>
            <Box mb="2">
              <CalculatriceLink>Calculatrice</CalculatriceLink>
            </Box>
            <Box mb="2"></Box>
          </DrawerBody>
          <DrawerFooter>FOOTER GOES HERE</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default DrawerNav;
