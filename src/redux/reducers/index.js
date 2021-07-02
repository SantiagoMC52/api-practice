import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import selectedDataReducer from './selectedDataReducer';

const rootReducer = combineReducers({
  allData: dataReducer,
  dataDetails: selectedDataReducer
});

export default rootReducer;
