import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Pagination, Autoplay, Lazy,
} from 'swiper';
import { useQuery } from 'react-query';
import { uniqBy } from 'lodash';
import HoverVideoPlayer from 'react-hover-video-player';
import loading from '../../assets/loader.svg';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './style.scss';
import Loading from '../loading';
import SlideHover from '../slideHover';
import AppDetails from '../appDetails';

SwiperCore.use([Navigation, Pagination, Autoplay, Lazy]);

export default function Carousel() {
  const [hoverState, setHoverState] = useState(false);
  const getRes = async () => {
    const res = await getData(endpoint.slide);
    const movies = await uniqBy(res.movies, 'target.id').slice(0, 10);
    return movies;
  };
  const {
    data: trailer, isError, status,
  } = useQuery('TRAILER', getRes);
  return (
    <>
      <div
        onMouseEnter={() => { setHoverState(true); }}
        onMouseLeave={() => setHoverState(false)}
      >
        <Swiper
          pagination
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          lazy
          className="mySwiper"
        >
          {isError && (
          <SwiperSlide>

            <div className="w-100 position-relative mx-auto loader-gradient">
              <div className="position-absolute loader-container">
                <p>
                  Something went wrong
                </p>
              </div>
            </div>
          </SwiperSlide>
          )}
          {status === 'success' && (
          <>

            {trailer.map((slide) => (
              <SwiperSlide
                key={slide.target.id}
                data-key={slide.target.id}
                className="w-100"
              >
                <div className="swiper-lazy">
                  <div className="d-flex">

                    <div className="slide-video d-block">
                      <HoverVideoPlayer
                        videoSrc={`https://quiet-beyond-94611.herokuapp.com/${slide.webm[480]}`}
                        pausedOverlay={(
                          <div>
                            <img
                              src={slide.target.large_capsule_image}
                              alt={slide.name}
                              style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                            <div className="position-absolute slide-hover">
                              <SlideHover gameId={slide.target.id} hiddenState={hoverState} />
                            </div>
                          </div>
                            )}
                        loadingOverlay={(
                          <div className="slide-video position-relative mx-auto loader-gradient">
                            <div className="position-absolute loader-container">
                              <Loading />
                            </div>
                          </div>
                            )}
                      />
                    </div>
                    <div className="slide-text flex-fill p-2 bg-dark">
                      <div className="border border-danger">
                        <AppDetails gameId={slide.target.id} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white">
                  <img src={loading} alt="loading" />
                </div>

              </SwiperSlide>
            ))}
          </>
          )}
        </Swiper>
      </div>

    </>
  );
}
