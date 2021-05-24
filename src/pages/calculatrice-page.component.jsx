import { Box } from '@chakra-ui/layout';
import React from 'react';
import { Route } from 'react-router';

import Calculator from '../components/calculator/calculator.component';
import AddTest from './add-test.component';
import MoreInfo from './more-info.component';

const CalculatricePage = ({ match: { url } }) => {
  console.log(url);
  return (
    <Box>
      <Route exact path={url} component={Calculator} />
      <Route path={`${url}/add-test`} component={AddTest} />
      <Route path={`${url}/more-info`} component={MoreInfo} />
    </Box>
  );
};

export default CalculatricePage;
