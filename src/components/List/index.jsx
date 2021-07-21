import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { getApiData } from '../../redux/actions/actionCreators';
import MainButtons from '../Common/MainButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const List = () => {
  const information = useSelector((store) => store.allData);
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const classes = useStyles();

  const { section } = useParams();

  useEffect(() => {
    if (!information.length) dispatch(getApiData(section, pagination));
  }, [pagination]);

  function handlePagination(event, value) {
    setPagination(value);
    dispatch(getApiData(section, pagination));
  }

  return (
    <section>
      <ul>
        {
        information.results?.map((infoDetail) => (
          <>
            <li key={infoDetail.name}>
              <h5>
                <Link to={`/${section}/${infoDetail?.id}`}>{infoDetail.name}</Link>
              </h5>
            </li>
          </>
        ))
      }
      </ul>

      <div className={classes.root}>
        <Pagination count={information.info?.pages} page={pagination} onChange={handlePagination} color="secondary" />
      </div>
      <div>
        <MainButtons />
      </div>
    </section>
  );
};

export default List;
