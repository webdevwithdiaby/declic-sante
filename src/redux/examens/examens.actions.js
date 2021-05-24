import examensActionTypes from './examens.types';

export const addExamen = examen => ({
  type: examensActionTypes.ADD_EXAMEN,
  payload: examen,
});

export const addToSelectedExamens = examen => ({
  type: examensActionTypes.ADD_TO_SELECTED_EXAMENS,
  payload: examen,
});

export const reset = () => ({
  type: examensActionTypes.RESET,
});

export const setIsAmo = value => ({
  type: examensActionTypes.SET_IS_AMO,
  payload: value,
});

export const delecteExamenFromSelectedExamens = key => ({
  type: examensActionTypes.DELETE_EXAMEN_FROM_SELECTED_EXAMENS,
  payload: key,
});
