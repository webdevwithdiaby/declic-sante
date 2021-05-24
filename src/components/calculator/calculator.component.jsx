import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import {
  selectExamens,
  selectAmo,
  selectTotalPrice,
} from '../../redux/examens/examens.selectors';
import { createStructuredSelector } from 'reselect';

import { Switch } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { AddIcon, RepeatIcon, Search2Icon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { InputGroup } from '@chakra-ui/input';
import { InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Grid } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

import {
  addToSelectedExamens,
  reset,
  setIsAmo,
} from '../../redux/examens/examens.actions';

const Calculator = ({
  examens,
  history,
  addToSelectedExamens,
  reset,
  setIsAmo,
  isAmo,
  totalPrice,
}) => {
  const [amo, setAmo] = useState(isAmo);
  useEffect(() => {
    setIsAmo(amo);
    return () => {
      //cleanup
    };
  }, [amo, setIsAmo]);

  const handleAmoChange = e => {
    setAmo(e.target.checked);
  };
  return (
    <Box>
      <Box minH="8vh" borderBottomWidth="1px">
        <Flex
          align="center"
          minH="8vh"
          bg="white"
          px="4"
          maxW="71.25rem"
          mx="auto"
        >
          <Box mr="2">
            <IconButton
              colorScheme="teal"
              icon={<RepeatIcon />}
              onClick={() => {
                reset();
                setIsAmo(false);
                setAmo(false);
              }}
            />
          </Box>
          <Box mx="auto" flex="1" pos="relative">
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<Search2Icon />}
                color="gray.300"
              />
              <Input
                type="search"
                borderRadius="10rem"
                boxShadow="lg"
                placeholder="Chercher Examen"
              />
            </InputGroup>
          </Box>
          <Box ml="2">
            <IconButton
              icon={<AddIcon />}
              onClick={() => history.push('/calculatrice/add-test')}
              colorScheme="teal"
            />
          </Box>
        </Flex>
      </Box>
      <Box
        height="84vh"
        overflowY="scroll"
        px="2"
        py="5"
        maxW="71.25rem"
        mx="auto"
      >
        {examens.map(examen => (
          <Grid
            gridTemplateColumns="1fr auto auto"
            key={examen.key}
            _notLast={{
              borderBottom: '1px solid #ccc',
            }}
            p="3"
          >
            <Text> {examen.name} </Text>
            <HStack mx="4">
              <Text> {examen.price} </Text>
              <Text> {examen.amo} </Text>
            </HStack>
            <Box>
              <IconButton
                icon={<AddIcon />}
                size="sm"
                onClick={() => addToSelectedExamens(examen)}
              />
            </Box>
          </Grid>
        ))}
      </Box>

      <Box h="8vh" borderTop="1px solid #ccc">
        <Flex
          height="8vh"
          align="center"
          justify="space-between"
          px="4"
          maxW="71.25rem"
          mx="auto"
        >
          <HStack>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="amo-alert" mb="0">
                Amo ?
              </FormLabel>
              <Switch
                id="amo-alert"
                isChecked={amo}
                onChange={handleAmoChange}
              />
            </FormControl>
            <Text> {totalPrice} </Text>
            <Text>FCFA</Text>
          </HStack>

          <Box>
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => history.push('/calculatrice/more-info')}
            >
              VOIR PLUS
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  examens: selectExamens,
  isAmo: selectAmo,
  totalPrice: selectTotalPrice,
});

const mapDispatchToProps = dispatch => ({
  addToSelectedExamens: examen => dispatch(addToSelectedExamens(examen)),
  reset: () => dispatch(reset()),
  setIsAmo: value => dispatch(setIsAmo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
