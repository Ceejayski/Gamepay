import React, { useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import PropTypes from 'prop-types';
import Loading from '../loading';
import PlatformIdentifier from '../plaftormIdentifier';
import RatingScore from '../RatingScore';

function GameDatails({ data, type }) {
  const [hover, sethover] = useState(true);
  const handleMouseEnter = () => {
    sethover(false);
  };
  const handleMouseLeave = () => {
    sethover(true);
  };
  return (
    <div className="game-card" id={`hover-${data.steam_appid}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      {data.movies !== undefined && type !== 'filter' && (
      <HoverVideoPlayer
        videoSrc={`https://quiet-beyond-94611.herokuapp.com/${data.movies[0].mp4[480]}`}
        preload="none"
        style={{
          width: '100%',
        }}
        hoverTarget={() => document.getElementById(`hover-${data.steam_appid}`)}
        controls
        controlsList="nodownload nofullscreen"
        pausedOverlay={(
          <img src={data.header_image} alt="pic" className="img-fluid" />
                      )}
        loadingOverlay={(
          <div className="position-relative overlay loader-gradient">
            <div className="position-absolute loader-container">
              <Loading />
            </div>
          </div>
                          )}
      />
      )}
      {(data.movies === undefined || type === 'filter') && (
      <img src={data.header_image} alt="pic" className="img-fluid mb-2" />
      )}
      <div className="px-2">
        <div className="d-flex align-items-center">
          <div className="text-right flex-grow-1">

            <PlatformIdentifier platform={data.platforms} />
          </div>
          {data.metacritic !== undefined && (
          <div>
            <RatingScore score={data.metacritic.score} />
          </div>
          )}
        </div>
        <div className="game-name mt-1">
          <h6>{data.name}</h6>
        </div>
        {data.genres !== undefined && (
          <div className="d-flex game-description align-items-center pb-2">
            <p className="mb-0 flex-grow-1">Genres:</p>
            <div className="mb-0">
              {data.genres.slice(0, 3).map((genre) => (
                <span className="ms-1 genre-span" key={genre.id}>
                  {genre.description}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="d-flex game-description align-items-center py-2">
          <p className="mb-0 flex-grow-1">
            Release Date:
          </p>
          <p className="mb-0 text-white">
            {data.release_date.coming_soon ? 'Coming Soon' : data.release_date.date}
          </p>
        </div>
        <div className="d-flex game-description align-items-center py-2">
          <p className="mb-0 flex-grow-1">
            Publishers:
          </p>
          <p className="mb-0 text-white">
            {data.publishers}
          </p>
        </div>
        <div className="text-center mt-3" hidden={hover}>
          <p className="short-description">{data.short_description}</p>
        </div>
        <div className="d-flex flex-row-reverse py-2  pb-3 price-overview mx-2">
          <p className="m-0">
            {data.price_overview !== undefined ? (
              <>
                {(data.is_free) && (
                <span className="free-span">
                  Free to Play
                </span>
                )}
                {!(data.is_free) && data.price_overview.discount_percent > 0 && (
                <span className="discount-span bg-warning text-secondary">
                  {data.price_overview.discount_percent}
                  %
                  <span className="p-0 ms-1">Off</span>
                </span>
                )}
                {!(data.is_free) && data.price_overview.discount_percent === 0 && (
                <span className="price-span bg-primary">
                  {data.price_overview.final_formatted}
                </span>
                )}
              </>
            ) : (
              <span className="free-span">
                Coming Soon
              </span>
            )}
          </p>
          <div className="mb-0 flex-grow-1" hidden={hover}>
            <button type="button" className="btn btn-labeled btn-light btn-sm">
              <span className="btn-label"><i className="fas fa-plus me-1" /></span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

GameDatails.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  type: PropTypes.string.isRequired,
};

export default GameDatails;
