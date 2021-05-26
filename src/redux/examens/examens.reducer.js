import examensActionTypes from './examens.types';
import { addExamenToSelectedExamensUtil } from './examens.utils';
import EXAMNS_DATA from './examens.data';

const INITIAL_STATE = {
  examens: EXAMNS_DATA,
  selectedExamens: [],
  isAmo: false,
};

const examensReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case examensActionTypes.ADD_EXAMEN:
      return {
        ...state,
        examens: [action.payload, ...state.examens],
      };
    case examensActionTypes.ADD_TO_SELECTED_EXAMENS:
      return {
        ...state,
        selectedExamens: addExamenToSelectedExamensUtil(state, action.payload),
      };
    case examensActionTypes.RESET:
      return {
        ...state,
        selectedExamens: [],
      };
    case examensActionTypes.SET_IS_AMO:
      return {
        ...state,
        isAmo: action.payload,
      };
    case examensActionTypes.DELETE_EXAMEN_FROM_SELECTED_EXAMENS:
      return {
        ...state,
        selectedExamens: state.selectedExamens.filter(
          ({ key }) => key !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default examensReducer;
