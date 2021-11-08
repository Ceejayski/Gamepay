import React from 'react';
import { useQuery } from 'react-query';
import getData from '../../shared/client';
import endpoint from '../../shared/endpoints';

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
        <div>
          <h4>
            Top Sellers
          </h4>
          {data.top_sellers.items.slice(0,9).map((item) => (

          ))}
        </div>
      )}
    </div>
  );
}
