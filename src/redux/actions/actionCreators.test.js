import axios from 'axios';
import { getApiData, getApiDetail } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('getApiData function', () => {
  test('should dispatch error', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValue();

    await getApiData()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_DATA_ERROR
    });
  });

  test('should dispatch data', async () => {
    const dispatch = jest.fn();
    const section = 'characters';
    const data = { results: [{ name: 'Rick' }] };
    axios.get.mockResolvedValue({ data });

    await getApiData(section)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_DATA,
      payload: data
    });
  });
});

describe('getApiDetail function', () => {
  test('should dispatch error', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValue();

    await getApiDetail()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_DETAIL_DATA_ERROR
    });
  });

  test('should dispacth data detail', async () => {
    const dispatch = jest.fn();
    const section = 'characters';
    const id = 1;
    const data = { name: 'Rick' };
    axios.get.mockResolvedValue({ data });

    await getApiDetail(section, id)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_DETAIL_DATA,
      payloadDetail: { name: 'Rick' }
    });
  });
});
