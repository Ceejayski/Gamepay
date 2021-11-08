import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import action from '../../assets/action.png';
import strategy from '../../assets/strategy.png';
import apex from '../../assets/apex.png';
import rpg from '../../assets/rpg.png';
import early from '../../assets/images.jpg';
import simulation from '../../assets/simulation.png';
import racing from '../../assets/racing.jpg';
import adventure from '../../assets/adventure.png';
import sports from '../../assets/sports.png';

library.add(faPercent);
const DiscountIcon = (<FontAwesomeIcon icon="percent" />);

const TopSellersIcon = (
  <svg className="SVGInline-svg discover-sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#FFF" d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z" />
  </svg>
);
const NewReleasesIcon = (
  <svg className="SVGInline-svg discover-sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 26"><path fill="#FFF" d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z" /></svg>
);
const UpcomingIcon = (
  <svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16"><path fill="#FFF" d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z" /></svg>
);
const categories = [
  { name: 'Top Sellers', icon: TopSellersIcon, id: 'cat_topsellers' }, { name: 'New Realeses', icon: NewReleasesIcon, id: 'cat_newreleases' },
  { name: 'Upcoming Games', icon: UpcomingIcon, id: 'cat_comingsoon' }, { name: 'Discounted Games', icon: DiscountIcon, id: 'cat_special' },
];

const genres = [
  { name: 'Free to Play', icon: apex }, { name: 'Early Access', icon: early }, { name: 'Action', icon: action },
  { name: 'Strategy', icon: strategy }, { name: 'RPG', icon: rpg }, { name: 'Adventure', icon: adventure },
  { name: 'Sports', icon: sports }, { name: 'Racing', icon: racing }, { name: 'Simulation', icon: simulation }];
function SideBar({ clickHandler }) {
  return (
    <aside className="text-right">
      <div>
        <div className="category">
          <p className="cat-title mb-1">
            <button
              type="button"
              className="btn btn-block w-100 sidebar-links"
              onClick={(e) => {
                clickHandler({ name: 'All', type: 'index' });
                e.preventDefault();
              }}
            >
              Home
            </button>

          </p>
          <p className="cat-title mb-1 pb-2 pt-1 text-center">Browse Categories</p>
          <div className="cat-item-list ms-3">
            {categories.map((cat) => (
              <div className="categories-contain" key={cat.name}>
                <button
                  type="button"
                  className="btn btn-block w-100 sidebar-links"
                  onClick={(e) => {
                    clickHandler({ name: cat.id, type: 'cat' });
                    e.preventDefault();
                  }}
                >
                  <div className="cat-item d-flex align-items-center mb-2">
                    <div className="cat-item-icon">
                      {cat.icon}
                    </div>
                    <p className="ms-2 mb-0 cat-item-name">
                      {cat.name}
                    </p>
                  </div>
                </button>
              </div>
            ))}

          </div>
        </div>
        <div className="category mt-4">
          <p className="cat-title mb-1 py-2 text-center"> Genres</p>

          <div className="cat-item-list ms-3">
            {
              genres.map((genre) => (
                <div key={genre.name} className="genre-contain">
                  <button
                    type="button"
                    className="btn btn-block w-100 sidebar-links"
                    onClick={(e) => {
                      clickHandler({ name: genre.name, type: 'genre' });
                      e.preventDefault();
                    }}
                  >
                    <div className="cat-item d-flex align-items-center mb-2">
                      <div className="cat-item-icon">
                        <img className="discover-sidebar__image" src={genre.icon} alt={genre.name} />
                      </div>
                      <p className="ms-2 mb-0 cat-item-name">
                        {genre.name}
                      </p>
                    </div>
                  </button>
                </div>

              ))
            }
          </div>

        </div>
        <div className="category mt-4">
          <p className="cat-title mb-1 text-center"> Recently Viewed</p>
        </div>
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default SideBar;
