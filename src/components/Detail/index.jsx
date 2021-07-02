import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getApiDetail } from '../../redux/actions/actionCreators';
import Character from './Character';

const Detail = () => {
  const dataDetails = useSelector((store) => store.dataDetails);
  const dispatch = useDispatch();

  const { section, id } = useParams();

  useEffect(() => {
    dispatch(getApiDetail(section, id));
  }, []);

  return (
    <>
      <Character data={dataDetails} />
    </>
  );
};

export default Detail;
