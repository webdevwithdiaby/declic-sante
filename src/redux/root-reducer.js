import { combineReducers } from 'redux';
import examensReducer from './examens/examens.reducer';

const rootReducer = combineReducers({
  examensReducer,
});

export default rootReducer;
