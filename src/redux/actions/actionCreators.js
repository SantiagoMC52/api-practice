import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://rickandmortyapi.com/api';

export default function getApiData(section, page) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/${section}/?page=${page}`);
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
