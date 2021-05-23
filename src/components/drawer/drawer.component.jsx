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
  Flex,
} from '@chakra-ui/react';

import NavLink from '../nav-link/nav-link.component';

const DrawerNav = props => {
  return (
    <Drawer {...props} display={{ base: 'block', md: 'none' }} placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">DECLIC-SANTE</DrawerHeader>
          <DrawerBody>
            <Box mb="5">
              <NavLink color="#000000EB">Calculatrice</NavLink>
            </Box>
            <Box mb="5">
              <NavLink color="#000000EB">Modes Operatoires</NavLink>
            </Box>
          </DrawerBody>
          <DrawerFooter>FOOTER GOES HERE</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default DrawerNav;
