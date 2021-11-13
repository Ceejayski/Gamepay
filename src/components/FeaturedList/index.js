import React from 'react';
import { useQuery } from 'react-query';
import { uniqBy } from 'lodash';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';
import GameCard from '../gameCard';

const getList = async () => {
  const list = await getData(endpoint.index);
  const res = await list;
  return res;
};
export default function FeaturedList() {
  const {
    data, isError, status,
  } = useQuery('FeeaureList', getList);
  return (
    <div>
      {isError && (
        <div className="loader-gradient h-400 w-100 position-relative">
          <div className="position-absolute loader-container">
            Something went wrong, Try again
          </div>
        </div>
      )}
      {status === 'success' && (
        <>
          <div className="mt-5">
            <h4 className="mb-3">
              Today&apos;s Specials
            </h4>

            <GameCard gameIds={uniqBy(data.tabs.specials.items, 'id').slice(0, 6)} type="none" />
          </div>
          <div className="mt-5">
            <h4 className="mb-3">
              Today&apos;s Top Sellers
            </h4>

            <GameCard gameIds={uniqBy(data.tabs.topsellers.items, 'id').slice(0, 7)} type="none" />
          </div>
          <div className="mt-5">
            <h4 className="mb-3">
              Games Under $10
            </h4>

            <GameCard gameIds={uniqBy(data.tabs.under_ten.items, 'id').slice(0, 6)} type="none" />
          </div>
        </>
      )}
    </div>
  );
}
