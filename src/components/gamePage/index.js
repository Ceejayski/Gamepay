import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Thumbs,
} from 'swiper';
import HoverVideoPlayer from 'react-hover-video-player';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Loading from '../loading';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import RatingScore from '../RatingScore';
import PlatformIdentifier from '../plaftormIdentifier';
import AddToCartBtn from '../addToCartBtn';
import addGameToViewed from '../../redux/views/view.actions';

SwiperCore.use([Navigation, Thumbs]);
function GamePage({ data, onViewGame }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const view = { id: data.steam_appid, name: data.name };
  const addToGamedViews = addGameToViewed(view);

  useEffect(() => {
    // setThumbsSwiper(null);
    onViewGame(addToGamedViews);
  }, [data]);

  return (
    <>
      <HelmetProvider>
        <>
          <Helmet>

            <style>
              {`
                            body {
                                background: radial-gradient(circle at 71% 20%, rgba(0,0,0,0.2698123194590336) 0%, rgba(21,21,21,0.98) 25%), url('${data.background}') no-repeat right 10em top;
                            }
                       `}
            </style>
          </Helmet>
          <div className="d-flex flex-xs-wrap game-details-text">
            <div className="swiper-contain">
              <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} spaceBetween={10} navigation thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                {data.movies !== undefined && (
                <>
                  {data.movies.map((movie) => (

                    <SwiperSlide key={movie.id}>
                      <HoverVideoPlayer
                        videoSrc={`https://quiet-beyond-94611.herokuapp.com/${movie[movie.mp4 !== undefined ? 'mp4' : 'webm'][480]}`}
                        preload="none"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        volume={0.3}
                        muted={false}
                        controls
                        controlsList="nodownload nofullscreen"
                        pausedOverlay={(
                          <img src={movie.thumbnail} alt="pic" className="img-fluid h-100" />
                                  )}
                        loadingOverlay={(
                          <div className="position-relative mySwiper2 loader-gradient">
                            <div className="position-absolute loader-container">
                              <Loading />
                            </div>
                          </div>
                          )}
                      />
                    </SwiperSlide>

                  ))}
                </>
                )}
                {data.screenshots !== undefined && (
                <>
                  {data.screenshots.map((pic) => (
                    <SwiperSlide key={pic.id}>
                      <img alt="pic" src={pic.path_full} />
                    </SwiperSlide>
                  ))}
                </>
                )}
              </Swiper>
              <Swiper onSwiper={setThumbsSwiper} spaceBetween={4} slidesPerView={5} freeMode watchSlidesProgress className="mySwiper3">
                {data.movies !== undefined && (
                <>
                  {data.movies.map((movie) => (

                    <SwiperSlide key={movie.id + 1}>
                      <img src={movie.thumbnail} alt="pic" />
                    </SwiperSlide>

                  ))}
                </>
                )}
                {data.screenshots !== undefined && (
                <>
                  {data.screenshots.map((pic) => (
                    <SwiperSlide key={pic.id}><img alt="pic" src={pic.path_thumbnail} /></SwiperSlide>
                  ))}
                </>
                )}
              </Swiper>
            </div>
            <div className="flex-fill px-3">
              <div className="mb-2">
                <img src={data.header_image} alt="header" className="w-100" />
              </div>
              <div className="main-text mb-2">
                <p className="lead mb-0">{parse(data.short_description)}</p>
              </div>
              <div className="main-details">
                {data.metacritic !== undefined && (

                <div className="d-flex justify-content-between align-items-center details pb-2">
                  <p className="mb-0">Ratings Score (of 100)</p>
                  <RatingScore score={data.metacritic.score} />
                </div>
                )}
                <div className="d-flex justify-content-between align-items-center details pb-1">
                  <p className="mb-0">Publishing Company</p>
                  <div>

                    {data.publishers.map((company) => (
                      <span key={company} className="ms-1 font-1">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center details py-2">
                  <p className="mb-0">Realese Date</p>
                  <div>

                    {data.release_date.coming_soon ? (<p className="mb-0 font-1">Coming Soon</p>) : (<p className="mb-0 font-1">{data.release_date.date}</p>)}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center details pb-2">
                  <p className="mb-0 w-50">Tags</p>
                  <div>

                    {data.categories.slice(0, 6).map((tag) => (
                      <span className="font-1 py-1 ms-1 px-2 bg-dark d-inline-block" key={tag.id}>
                        {tag.description}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="game-details-card w-100 mx-auto bg-secondary px-2 py-2 my-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4>{data.name}</h4>
                <PlatformIdentifier platform={data.platforms} />
                <div className="w-80">
                  {data.genres.map((genre) => (
                    <span className="d-inline-block py-1 px-2 me-1 font-1 bg-dark" key={genre.id}>
                      {genre.description}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="price">
                  {data.price_overview !== undefined ? (
                    <>

                      {!(data.is_free) && data.price_overview.discount_percent > 0 && (
                        <>
                          <div className="d-flex flex-row-reverse">
                            <span className="discount-span bg-danger d-inline-block text-decoration-line-through  py-1 px-2">
                              {data.price_overview.initial_formatted}
                            </span>
                          </div>

                          <div className="d-flex flex-row-reverse">
                            <span className="price-span bg-success py-1 px-3">
                              {data.price_overview.final_formatted}
                            </span>
                          </div>
                        </>
                      )}
                      {!(data.is_free) && data.price_overview.discount_percent === 0 && (
                      <>
                        <span className="price-span bg-success py-2 px-3">
                          {data.price_overview.final_formatted}
                        </span>
                      </>
                      )}
                    </>
                  ) : (
                    <>
                      {(data.is_free) && (
                      <span className="bg-success py-2 px-3">
                        Free to Play
                      </span>
                      )}
                    </>
                  )}
                </div>
                <div className="mt-2">
                  <AddToCartBtn
                    id={parseInt(data.steam_appid, 10)}
                    text={data.price_overview !== undefined || !data.release_date.coming_soon ? 'Add to Cart' : 'Pre-order'}
                    price={data.is_free || data.price_overview === undefined ? '$0' : data.price_overview.final_formatted}
                    name={data.name}
                    classes="warning"
                  />
                </div>
              </div>
            </div>
            <p className="mb-0 text-center font-1">
              {data.content_descriptors.notes}
            </p>
          </div>
          <div className="game-main-details w-80 mx-auto">
            <div className="lead">

              {parse(data.detailed_description)}
            </div>
            <div className="lead">
              <h2> System Specs</h2>
              <div className="specs">

                {data.pc_requirements !== undefined && (
                <>
                  <h6 className="text-center text-decoration-underline"> PC Requirements </h6>
                  <div className="lead">{parse(data.pc_requirements.minimum)}</div>
                  {data.pc_requirements.recommended !== undefined && (

                  <div className="lead">{parse(data.pc_requirements.recommended)}</div>
                  )}
                </>
                )}
                {data.mac_requirements.minimum !== undefined && (
                <>
                  <h6 className="text-center text-decoration-underline"> MAC Requirements </h6>
                  <div className="lead">{parse(data.mac_requirements.minimum)}</div>
                </>
                )}
                {data.linux_requirements.minimum !== undefined && (
                <>
                  <h6 className="text-center text-decoration-underline"> Linux(Wine) Requirements </h6>
                  <div className="lead">{parse(data.linux_requirements.minimum)}</div>
                </>
                )}
              </div>

            </div>
          </div>

        </>
      </HelmetProvider>
    </>
  );
}

GamePage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onViewGame: PropTypes.func.isRequired,
};

export default GamePage;
