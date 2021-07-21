import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MainButtons = () => {
  const history = useHistory();

  return (

    <>
      <button type="button" onClick={() => history.goBack()}>Back</button>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  );
};

export default MainButtons;
