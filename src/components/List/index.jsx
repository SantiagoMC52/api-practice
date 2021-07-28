/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { getApiData } from '../../redux/actions/actionCreators';
import MainButtons from '../Common/MainButtons';
import SearchBar from '../SearchBar';
import './list.scss';

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
  const [searchTerm, setSearchTerm] = useState('');

  const classes = useStyles();
  const { section } = useParams();

  useEffect(() => {
    if (!information.length) dispatch(getApiData(section, pagination));
  }, [pagination]);

  function handlePagination(event, value) {
    setPagination(value);
    dispatch(getApiData(section, pagination));
  }

  function handleFilter(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <div className="searchbar">
        <SearchBar placeholder="Search..." handleFilter={handleFilter} />
      </div>
      <section className="list-container">
        <ul>
          {
              information.results?.filter((searched) => {
                if (searchTerm === '') {
                  return searched;
                }
                if (searched.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return searched;
                }
              }).map((infoDetail) => (
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
      </section>
      <div className={classes.root} id="pagination-container">
        <Pagination count={information.info?.pages} page={pagination} onChange={handlePagination} color="secondary" />
      </div>
      <div className="buttons-container">
        <MainButtons />
      </div>
    </>
  );
};

export default List;
