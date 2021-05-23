import React from 'react';
import { Button } from '@chakra-ui/react';

const NavLink = ({ children, ...otherProps }) => {
  return (
    <Button variant="link" fontSize="1rem" fontWeight="400" {...otherProps}>
      {children}
    </Button>
  );
};

export default NavLink;
