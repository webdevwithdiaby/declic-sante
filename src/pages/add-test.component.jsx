import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react';

import { FaSave } from 'react-icons/fa';

import { connect } from 'react-redux';
import { addExamen } from '../redux/examens/examens.actions';
const AddTest = ({ addExamen }) => {
  const [state, setState] = useState({
    name: '',
    price: 0,
    amo: 0,
  });
  const { name, price, amo } = state;

  const handleSubmit = e => {
    e.preventDefault();

    const key = Date.now();

    addExamen({ key, ...state });

    //clear fields
    setState({ name: '', price: 0, amo: 0 });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (value, name) => {
    setState(prev => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <Box>
      <Flex align="center" boxShadow="lg" minH="8vh" bg="white" px="6">
        <Box>
          <Heading fontSize="lg" mr="2rem">
            Ajouter Examen
          </Heading>
        </Box>
      </Flex>
      <Box px="2" py="5">
        <Box p="3" width="75%" mx="auto" boxShadow="lg">
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb="4">
              <FormLabel>Nom</FormLabel>
              <Input
                type="text"
                placeholder="Emtrer Nom"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Prix Normale</FormLabel>
              <NumberInput
                name="price"
                value={price}
                onChange={value => handlePriceChange(value, 'price')}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl mb="6">
              <FormLabel>Prix Amo</FormLabel>
              <NumberInput
                name="amo"
                value={amo}
                onChange={value => handlePriceChange(value, 'amo')}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl textAlign="center">
              <Button leftIcon={<FaSave />} colorScheme="teal" type="submit">
                Sauvegarder
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = dispatch => ({
  addExamen: examen => dispatch(addExamen(examen)),
});

export default connect(null, mapDispatchToProps)(AddTest);
