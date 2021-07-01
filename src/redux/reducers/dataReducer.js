import actionTypes from '../actions/actionTypes';

function dataReducer(data = [], action) {
  if (action.type === actionTypes.LOAD_DATA) {
    return action.payload;
  }
  return data;
}
export default dataReducer;
