import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function RecentlyViewed(props) {
  const { viewed } = props;
  return (
    <>
      {viewed.length > 0 && (

      <div className="category my-4">
        <p className="cat-title mb-1 text-center"> Recently Viewed</p>
        {viewed.map((game) => (
          <div key={game.id} className="genre-contain">
            <Link
              to={`/game/${game.id}`}
              className="btn btn-block w-100 sidebar-links"
            >
              <div className="cat-item d-flex align-items-center">
                <div className="cat-item-icon w-100 h-100">
                  <img alt="icon" className="img-fluid" src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.id}/capsule_184x69.jpg`} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      )}
    </>
  );
}

RecentlyViewed.propTypes = {
  viewed: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  viewed: state.viewedGames.viewedGames,
});

export default connect(mapStateToProps)(RecentlyViewed);
