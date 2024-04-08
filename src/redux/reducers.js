// reducers.js
import { combineReducers } from 'redux';
import colorReducer from './color/ColorReducer';

const rootReducer = combineReducers({
  color: colorReducer,
});

export default rootReducer;
