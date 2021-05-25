import React, { useRef } from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Logo from '../logo/logo.component';
import ToggleMenu from '../toggle-menu/toggle-menu.component';
import DrawerNav from '../drawer/drawer.component';
import DesktopNav from '../desktop-nav/desktop-nav.component';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box minH="8vh" borderBottomWidth="1px">
      <Flex align="center" minH="8vh" px="3" maxW="71.25rem" mx="auto">
        <ToggleMenu ref={btnRef} onClick={onOpen} mr="5" />
        <DrawerNav isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
        <Logo mr="5" />
        <DesktopNav />
      </Flex>
    </Box>
    // <CustomNav />
  );
};

export default Header;
