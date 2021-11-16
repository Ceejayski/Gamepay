import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { uniqBy } from 'lodash';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import GameCard from '../gameCard';
import Loading from '../loading';

function GenreList({ genreID }) {
  const getCategoryApps = async (id) => {
    const url = endpoint.getAppsinGenre(id);
    const result = await getData(url);
    return result;
  };
  const {
    isLoading, data, isSuccess, isError,
  } = useQuery(['CATEGORYAPPS', genreID], () => getCategoryApps(genreID));
  const [filter, setFilter] = useState('');
  const selectedValueHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      {isLoading && (
      <div className="position-relative game-container">
        <div className="position-absolute loader-container">
          <Loading />
        </div>
      </div>
      )}
      {(isError) && (
        <div className="position-relative game-container">
          <div className="position-absolute loader-container">
            <p>
              Something went wrong
            </p>
          </div>
        </div>
      )}
      {isSuccess && (
      <>
        <div className="mt-2">
          <div className="d-flex filter-title mb-4">
            <div className="align-self-start">
              <select
                className="form-select btn-dark"
                name="searchSelect"
                onChange={(e) => selectedValueHandler(e)}
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
          {data.tabs[filter] === undefined && (<GameCard gameIds={uniqBy(data.tabs[Object.keys(data.tabs)[0]].items, 'id')} type="filter" />)}
          {data.tabs[filter] !== undefined && (<GameCard gameIds={uniqBy(data.tabs[filter].items, 'id')} type="filter" />)}
        </div>
      </>
      )}
    </>
  );
}

GenreList.propTypes = {
  genreID: PropTypes.string.isRequired,
};

export default GenreList;
