import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getApiDetail } from '../../redux/actions/actionCreators';

const Character = () => {
  const dataDetails = useSelector((store) => store.dataDetails);
  const dispatch = useDispatch();

  const { section, id } = useParams();

  useEffect(() => {
    dispatch(getApiDetail(section, id));
  }, []);

  return (
    <>
      <h1>Character</h1>
      <h2>{dataDetails?.name}</h2>
    </>
  );
};

export default Character;
