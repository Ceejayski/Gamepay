import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import Loading from '../loading';
import './style.scss';

const hoverDetails = async (id) => {
  const result = await getData(endpoint.hoverData(id));
  const response = await result;
  return response;
};

function AppDetails({ gameId }) {
  const {
    data, isLoading, isError, status,
  } = useQuery(['hoverData', gameId], async () => hoverDetails(gameId));
  return (
    <>
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
      {status === 'success' && (
        <div className="slide-hover-text p-1">
          <p className="lead apphover-description text-center">
            {data.strDescription}
          </p>
          <div className="screenshot row g-1 p-1">
            {data.rgScreenshots.slice(0, 4).map((pic) => (
              <div className="pic-grid col-6" key={pic.id}>
                <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${pic.appid}/${pic.filename}`} alt="img-screenshot" className="pic-screenshot" />
              </div>
            ))}
          </div>
          <p className="mb-1">
            {data.strReleaseDate}
          </p>
          <p className="mb-1">
            Tags:
            {data.rgCategories.slice(0, 4).map((tag) => (
              <span key={tag.strDisplayName} className="app-tags py-1 px-2 ms-1">
                {tag.strDisplayName}
              </span>
            ))}
          </p>
          <p className="mb-1">
            Reviews Summary:
            {' '}
            {data.ReviewSummary.strReviewSummary}
          </p>
          <div className="d-flex flex-row-reverse to-cart-btn">
            <Link to={`/game/${gameId}`} className="btn btn-sm btn-info">
              More Info
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

AppDetails.propTypes = {
  gameId: PropTypes.number.isRequired,
};

export default AppDetails;
