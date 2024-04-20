import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGetTrailersRequestQuery } from '../redux/apiTrailers';
import { CamperItems } from '../components/CamperItems';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { searchParamsToObject } from '../utils/functions/functions';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from '@mantine/hooks';
import { Icon } from '../components/Icon';
import { map_pin } from '../assets/icons';
import { Label } from '../components/Label';
import { Input } from '../components/Input';
import { FilterButton } from '../components/FilterButton';
import { equipmentMap, typeMapFilter } from '../utils/functions/variables';

export const Catalog = () => {
  const {
    data: campers,
    isLoading: campersLoading,
    error: campersError,
  } = useGetTrailersRequestQuery();

  const ref = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(
    () => searchParamsToObject(new URLSearchParams(searchParams)),
    [searchParams]
  );
  const [value, setValue] = useState(searchParams.get('location') || '');
  useEffect(() => {
    setValue(searchParams.get('location') || '');
    if (ref.current) {
      ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [filters]);
  const handleSubmit = key => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(key)) {
      key.forEach(k => {
        if (params.has(k)) {
          params.delete(k);
        } else {
          params.append(k, k);
        }
      });
      setSearchParams(params);
      return;
    }
    if (params.has(key)) {
      params.delete(key);
    } else {
      params.append(key, key);
    }
    setSearchParams(params);
  };
  const handleSubmitLocation = value => {
    const params = new URLSearchParams(searchParams);
    value ? params.set('location', value) : params.delete('location');
    setSearchParams(params);
  };
  const handleSubmitDebounced = useDebouncedCallback(value => {
    handleSubmitLocation(value);
  }, 500);

  const handleSubmitRadio = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (params.has(key) && params.get(key) === value) {
      params.delete(key);
      setSearchParams(params);
      return;
    }
    params.set(key, value);
    setSearchParams(params);
  };

  if (campersError) {
    return <Error />;
  }
  return (
    <section>
      <div className={'flex items-center justify-between pt-[90px]'}>
        <div className={'w-1/3 mb-auto mx-[64px] '}>
          <Input
            label="Location"
            id="location"
            placeholder="Kyiv, Ukraine"
            value={value}
            onChange={v => {
              setValue(v);
              handleSubmitDebounced(v);
            }}
            onKeyDown={e =>
              e.key === 'Enter' && handleSubmitLocation(e.currentTarget.value)
            }
            icon={
              <Icon
                className={!value ? 'opacity-40' : 'opacity-100'}
                value={value}
                style={{
                  left: '17px',
                  bottom: '0',
                  transform: 'translate(-50%, -50%)',
                  position: 'absolute',
                }}
                icon={map_pin}
                fill="none"
                stroke="none"
              />
            }
          />
          <div className="mt-[32px]">
            <Label label="Filter" />
            <h2 className="mt-[32px] font-bold text-[24px]">
              Vehicle equipment
            </h2>
            <div className={'border-b border-grey-lightGrey w-full my-6'}></div>
            <div className="flex gap-4 flex-wrap" id="filter">
              {Object.entries(equipmentMap).map(([name, Component]) => (
                <FilterButton
                  icon={Component}
                  key={name}
                  onClick={() => {
                    if (name === 'Shower/WC') {
                      handleSubmit(['toilet', 'bathroom']);
                      return;
                    }
                    handleSubmit(name.toLowerCase());
                  }}
                  selected={
                    name === 'Shower/WC'
                      ? searchParams.has('toilet')
                      : searchParams.has(name.toLowerCase())
                  }
                >
                  {name}
                </FilterButton>
              ))}
            </div>
            <h2 className="mt-[32px] font-bold text-[24px]">Vehicle type</h2>
            <div className={'border-b border-grey-lightGrey w-full my-6'}></div>
            <div className="flex gap-4 flex-wrap">
              {Object.entries(typeMapFilter).map(([name, Component]) => (
                <FilterButton
                  icon={Component}
                  key={name}
                  onClick={() => handleSubmitRadio('type', name.toLowerCase())}
                  selected={searchParams.get('type') === name.toLowerCase()}
                >
                  {name}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>
        <div className={'w-2/3 h-[85vh] overflow-auto'} ref={ref}>
          <CamperItems campers={campers} isLoading={campersLoading} />
        </div>
      </div>
      {campersLoading && <Loading />}
    </section>
  );
};
