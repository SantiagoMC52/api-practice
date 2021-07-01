import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getApiDetail } from '../../redux/actions/actionCreators';

const Detail = () => {
  const dataDetails = useSelector((store) => store.dataDetails);
  const dispatch = useDispatch();

  const { section, id } = useParams();

  useEffect(() => {
    dispatch(getApiDetail(section, id));
  }, []);

  return (
    <>
      <h1>Detail</h1>
      <h2>{dataDetails?.name}</h2>
      <h2>{dataDetails?.type}</h2>
      <img src={dataDetails?.image} alt="" />
    </>
  );
};

export default Detail;
