import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home.component';
import CalculatricePage from './pages/calculatrice-page.component';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/calculatrice" component={CalculatricePage} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
