import actionTypes from '../actions/actionTypes';

function selectedDataReducer(selectedData = {}, action) {
  if (action.type === actionTypes.LOAD_DETAIL_DATA) {
    return action.payloadDetail;
  }
  return selectedData;
}
export default selectedDataReducer;
