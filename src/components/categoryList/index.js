import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { uniqBy } from 'lodash';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import GameCard from '../gameCard';
import './style.scss';

function CategoryList({ categoryID, listType }) {
  const getCategoryApps = async (id) => {
    const url = listType === 'cat' ? endpoint.getAppsinCat(id) : endpoint.getAppsinGenre(id);
    const result = await getData(url);
    return result;
  };
  const { data, isSuccess, isError } = useQuery(['CATEGORYAPPS', categoryID], () => getCategoryApps(categoryID));
  const [defaultFilter] = useState(listType === 'cat' ? 'viewall' : 'topsellers');
  const [filter, setFilter] = useState(defaultFilter);
  const selectedValueHandler = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    // set our variable to true
    console.log('mounted');
    return () => {
      // cancel the subscription
      console.log('unmounted');
    };
  }, []);
  return (
    <>
      {isError && (
        <div className="loader-gradient h-400 w-100 position-relative">
          <div className="position-absolute loader-container">
            Something went wrong, Try again
          </div>
        </div>
      )}
      {isSuccess && (
      <>
        <div className="mt-5">
          <div className="d-flex filter-title mb-4">
            <div className="align-self-start">
              <select
                className="form-select btn-dark"
                name="searchSelect"
                onChange={(e) => selectedValueHandler(e)}
                defaultValue={defaultFilter}
              >
                {Object.keys(data.tabs).map((key) => (
                  <option key={key} value={key}>
                    {data.tabs[key].name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>
                {data.name}
              </h4>
            </div>
            <div />
          </div>
          {data.tabs[filter] === undefined && (<GameCard gameIds={uniqBy(data.tabs[defaultFilter].items, 'id')} type="filter" />)}
          {data.tabs[filter] !== undefined && (<GameCard gameIds={uniqBy(data.tabs[filter].items, 'id')} type="filter" />)}
        </div>
      </>
      )}
    </>
  );
}

CategoryList.propTypes = {
  categoryID: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};

export default CategoryList;
