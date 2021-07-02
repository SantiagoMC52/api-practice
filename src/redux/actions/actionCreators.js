import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://rickandmortyapi.com/api';

export function getApiData(section, page) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${section}?page=${page}`);
      dispatch({
        type: actionTypes.LOAD_DATA,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: actionTypes.LOAD_DATA_ERROR
      });
    }
  };
}

export function getApiDetail(section, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${section}/${id}`);
      dispatch({
        type: actionTypes.LOAD_DETAIL_DATA,
        payloadDetail: data
      });
    } catch (err) {
      dispatch({
        type: actionTypes.LOAD_DETAIL_DATA_ERROR
      });
    }
  };
}
