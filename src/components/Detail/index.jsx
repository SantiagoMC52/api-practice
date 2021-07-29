import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getApiDetail } from '../../redux/actions/actionCreators';
import Character from './Character';
import Episode from './Episode';
import Location from './Location';
import MainButtons from '../Common/MainButtons';

const Detail = () => {
  const dataDetails = useSelector((store) => store.dataDetails);
  const dispatch = useDispatch();

  const { section, id } = useParams();

  useEffect(() => {
    dispatch(getApiDetail(section, id));
  }, []);

  function renderBasedOnSection(param) {
    let component;
    switch (param) {
      case 'character':
        component = <Character data={dataDetails} />;
        break;
      case 'episode':
        component = <Episode data={dataDetails} />;
        break;
      case 'location':
        component = <Location data={dataDetails} />;
        break;
      default:
        break;
    }
    return component;
  }

  return (
    <>
      {renderBasedOnSection(section)}
      <div className="buttons-container">
        <MainButtons />
      </div>
    </>
  );
};

export default Detail;
