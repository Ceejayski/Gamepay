import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useQueries } from 'react-query';
import { useKeyGen } from 'react-key-from-object';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import Loading from '../loading';
import GameDatails from '../gameDetails';

// const getAppDetails = async (id) => {
//   const details = await getData(endpoint.getAppdetails(id));
//   const res = await details[id].data;
//   return res;
// };
function GameCard({ gameIds, type }) {
  const getGameDetails = async (id) => {
    const result = await getData(endpoint.getAppdetails(id));
    const response = await result[id];

    return response;
  };

  const query = useQueries(
    gameIds.map((gameId, index) => ({
      queryKey: ['gameIds', gameId.id, index],
      queryFn: () => getGameDetails(gameId.id),
    })),
  );
  const keyGen = useKeyGen();
  return (
    <div className="row">
      {
        query.map(({
          isLoading, isError, isSuccess, data,
        }) => (
          <React.Fragment key={keyGen.getKey({
            isLoading, isError, isSuccess, data,
          })}
          >
            {isLoading && (
              <>
                <div className="col-4">

                  <div className="loader-gradient game-card w-100 position-relative">
                    <div className="position-absolute loader-container">
                      <Loading />
                    </div>
                  </div>
                </div>
              </>
            )}
            {isError && (
              <>
                <div className="col-4">

                  <div className="loader-gradient game-card w-100 position-relative">
                    <div className="position-absolute loader-container">
                      Error Loading
                    </div>
                  </div>
                </div>
              </>
            )}
            {
              isSuccess && data.success && (
                <>
                  <div className="col-4 mb-3">
                    <GameDatails data={data.data} type={type} />
                  </div>
                </>
              )
            }
          </React.Fragment>
        ))
      }
    </div>
  );
}

GameCard.propTypes = {
  gameIds: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  type: PropTypes.string.isRequired,
};

export default GameCard;
