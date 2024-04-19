import React from 'react';
import { useGetTrailersRequestQuery } from '../redux/apiTrailers';
import { CamperItems } from '../components/CamperItems';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export const Catalog = () => {
  const {
    data: campers,
    isLoading: campersLoading,
    error: campersError,
  } = useGetTrailersRequestQuery();

  if (campersError) {
    return <Error />;
  }

  return (
    <section>
      <div className={'flex items-center justify-between'}>
        Filter
        <div
          className={'w-2/3 h-[85vh] overflow-auto'}
          // ref={ref}
        >
          <CamperItems campers={campers} isLoading={campersLoading} />
        </div>
      </div>
      {campersLoading && <Loading />}
    </section>
  );
};
