import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/header/header.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
