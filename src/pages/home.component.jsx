import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Hero />
    </Box>
  );
};

export default HomePage;
