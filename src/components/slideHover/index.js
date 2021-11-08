import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import Loading from '../loading';
import './style.scss';
import PlatformIdentifier from '../plaftormIdentifier';

function SlideHover({ gameId, hiddenState }) {
  const getGameDatails = async (id) => {
    const result = await getData(endpoint.getAppdetails(id));
    const response = await result[id].data;
    return response;
  };

  const {
    isLoading, isError, status, data,
  } = useQuery(['MOERINFO', gameId], () => getGameDatails(gameId));
  return (
    <div className="slidehover" hidden={hiddenState}>

      {isLoading && (
        <div className="position-absolute loader-container">
          <Loading />
        </div>
      )}
      {isError && (
      <div className="position-absolute loader-container loader-gradient">
        Something went wrong
      </div>
      )}
      { status === 'success' && (
      <div className="ms-3 mt-2 d-flex pe-0">
        <div className="text-left me-auto">
          <h5>{data.name}</h5>
          <div className="genres">
            {data.genres.map((g) => (
              <span key={g.id} className="me-2 px-2 py-1">{g.description}</span>
            ))}
          </div>

        </div>
        {/* <div>
          {!(data.is_free) && data.price_overview.discount_percent > 0
          && (
            <div className="position-relative">

              <div className="slanted position-absolute">

                <p className="slanted-text text-center mb-0">
                  {data.price_overview.discount_percent}
                  % Discount
                </p>
              </div>
            </div>
          )}
        </div> */}
        <div className="price position-absolute">
          {data.is_free && (
            <p className="mb-0 main px-3 py-2">Free to Play</p>
          )}
          {!(data.is_free) && data.price_overview.discount_percent === 0 && (
            <p className="mb-0 main px-3 py-2">{data.price_overview.final_formatted}</p>
          )}
          {!(data.is_free) && data.price_overview.discount_percent > 0 && (
            <div>

              <div className="mb-0 discount d-flex justify-content-end"><span className="px-2 py-1">{data.price_overview.initial_formatted}</span></div>
              <p className="mb-0 main py-2 px-3">{data.price_overview.final_formatted}</p>
            </div>
          )}
        </div>
        <div className="platforms">
          <PlatformIdentifier platform={data.platforms} />
        </div>
      </div>
      )}

    </div>
  );
}

SlideHover.propTypes = {
  gameId: PropTypes.number.isRequired,
  hiddenState: PropTypes.bool.isRequired,
};

export default SlideHover;
