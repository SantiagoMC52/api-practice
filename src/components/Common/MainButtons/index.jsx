import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../List/list.scss';

const MainButtons = () => {
  const history = useHistory();

  return (

    <>
      <button className="buttons-container__back" type="button" onClick={() => history.goBack()}>Back</button>
      <Link to="/">
        <button className="buttons-container__home" type="button">Home</button>
      </Link>
    </>
  );
};

export default MainButtons;
