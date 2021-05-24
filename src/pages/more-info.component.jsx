import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectSelectedExamens,
  selectAmo,
  selectTotalPrice,
} from '../redux/examens/examens.selectors';

import { delecteExamenFromSelectedExamens } from '../redux/examens/examens.actions';

const MoreInfo = ({
  selectedExamens,
  isAmo,
  totalPrice,
  delecteExamenFromSelectedExamens,
}) => {
  return (
    <Box>
      <Box minH="8vh" borderBottomWidth="1px">
        <Flex
          align="center"
          minH="8vh"
          bg="white"
          px="2"
          maxW="71.25rem"
          mx="auto"
        >
          <Box>
            <Heading fontSize="lg" mr="2rem">
              Plus d'information
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Box
        height="92vh"
        overflowY="scroll"
        px="2"
        py="5"
        maxW="71.25rem"
        mx="auto"
      >
        {selectedExamens.map(examen => (
          <Grid
            gridTemplateColumns="1fr auto auto"
            key={examen.key}
            _notLast={{
              borderBottom: '1px solid #ccc',
            }}
            p="2"
          >
            <Text> {examen.name} </Text>
            <Box mr="3">
              {isAmo ? (
                <Text> {examen.amo} </Text>
              ) : (
                <Text> {examen.price} </Text>
              )}
            </Box>
            <Box>
              <IconButton
                icon={<CloseIcon />}
                size="sm"
                onClick={() => delecteExamenFromSelectedExamens(examen.key)}
              />
            </Box>
          </Grid>
        ))}
        <HStack mt="6" spacing="2">
          <Heading fontSize="lg">Prix Total:</Heading>
          <Text>{`${totalPrice} FCFA`}</Text>
        </HStack>
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedExamens: selectSelectedExamens,
  isAmo: selectAmo,
  totalPrice: selectTotalPrice,
});

const mapDispatchToProps = dispatch => ({
  delecteExamenFromSelectedExamens: key =>
    dispatch(delecteExamenFromSelectedExamens(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);
