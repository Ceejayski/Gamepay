import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SwiperCore, {
  Navigation, Thumbs,
} from 'swiper';
import PropTypes from 'prop-types';
// import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import Loading from '../loading';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './style.scss';
import GamePage from '../gamePage';

SwiperCore.use([Navigation, Thumbs]);
function Game(props) {
  const { id } = useParams();
  const getGameDetails = async () => {
    const result = await getData(endpoint.getAppdetails(id));
    const res = await result[id];
    return res;
  };

  const addToViewed = (action) => {
    props.dispatch(action);
  };

  const {
    data, isLoading, isError, isSuccess,
  } = useQuery(`Game${id}`, getGameDetails);

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
      {(isSuccess && data.success) && (
      <GamePage data={data.data} onViewGame={addToViewed} />
      )}

    </>
  );
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ viewedGames: state.viewedGames });
export default connect(mapStateToProps)(Game);
