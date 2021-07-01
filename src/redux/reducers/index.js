import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  allData: dataReducer
});

export default rootReducer;
