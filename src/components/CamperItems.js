import { useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { useSearchParams } from 'react-router-dom';
import { map_pin, star, heart } from '../assets/icons';
import { Tag } from './Tag';
import { Button } from './Button';
import { Icon } from './Icon';
import {
  calculateTags,
  filterCampers,
  searchParamsToObject,
} from '../utils/functions/functions';
import { Modal } from './Modal';

export const CamperItems = ({ campers = [], isLoading, emptyComponent }) => {
  const [show, setShow] = useState(4);
  const [isOpenId, setIsOpenId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(
    () => searchParamsToObject(new URLSearchParams(searchParams)),
    [searchParams]
  );
  const isFiltered = useMemo(() => {
    return Object.keys(filters).length !== 0;
  }, [filters]);
  const filteredCampers = useMemo(() => {
    return isFiltered ? filterCampers(campers, filters) : campers;
  }, [filters, campers]);

  const showCampers = useMemo(() => {
    return filteredCampers.slice(0, show);
  }, [filteredCampers, show]);
  const handleShowMore = () => {
    setShow(show + 4);
  };

  useEffect(() => {
    setShow(4);
  }, [filteredCampers]);

  const [value, setValue] = useLocalStorage({
    key: 'favorites',
    defaultValue: [],
  });

  if (emptyComponent && showCampers.length === 0) {
    return emptyComponent;
  }

  if (showCampers.length === 0 && !isLoading && isFiltered) {
    return (
      <div className="flex items-center justify-center w-full h-[80vh] flex-col ">
        <p className="font-bold pb-4">No campers found</p>
        <Button onClick={() => setSearchParams({})}>Reset filters</Button>
      </div>
    );
  }

  return (
    <>
      {showCampers?.map(camper => {
        const camperTags = calculateTags({
          adults: camper.adults,
          transmission: camper.transmission,
          engine: camper.engine,
          ...camper.details,
        });
        return (
          <div
            className={'border rounded-lg border-grey-lightGrey p-3 m-3'}
            key={camper._id}
          >
            <div className={'flex gap-2'}>
              <div className={'w-1/3'}>
                <img
                  src={camper?.gallery[0]}
                  alt="camper foto"
                  className={'rounded-lg inline-block h-full object-cover'}
                />
              </div>
              <div className={'w-2/3 flex flex-col gap-3'}>
                <div className={'flex items-center gap-2 justify-between'}>
                  <h5 className={'font-bold'}>{camper?.name}</h5>
                  <div className={'flex items-center gap-2'}>
                    <span className="font-bold">
                      {'€' + camper.price.toFixed(2)}
                    </span>
                    <span
                      onClick={() =>
                        setValue(
                          value.includes(camper._id)
                            ? value.filter(item => item !== camper._id)
                            : [...value, camper._id]
                        )
                      }
                    >
                      <Icon
                        icon={heart}
                        fill=""
                        className={
                          value.includes(camper._id) ? 'svg-red' : 'svg-grey'
                        }
                      />
                    </span>
                  </div>
                </div>
                <div className={'flex items-center gap-1'}>
                  <Icon icon={star} width={'15px'} height={'15px'} />
                  <div>{camper.rating}</div>
                  <div className={'mr-2'}>
                    ({camper.reviews.length} Reviews)
                  </div>
                  <Icon
                    icon={map_pin}
                    fill={'none'}
                    width={'15px'}
                    height={'15px'}
                  />
                  <div>{camper.location}</div>
                </div>
                <div className={'text-zinc-500 truncate'}>
                  {camper.description}
                </div>
                <div className={'flex flex-wrap gap-2 p-1'}>
                  {camperTags.map(
                    item =>
                      !!item.value && (
                        <Tag
                          key={item.key?.name}
                          text={`${item.value > 1 ? item.value : ''} ${
                            item.key?.name
                          }`}
                          icon={item.key?.icon}
                        />
                      )
                  )}
                </div>
                <div>
                  <Button
                    variant={'primary'}
                    onClick={() => setIsOpenId(camper._id)}
                  >
                    Show more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {show < filteredCampers.length && (
        <div className="flex justify-center p-3">
          <Button onClick={handleShowMore} variant="secondary">
            Load more
          </Button>
        </div>
      )}
      {!!isOpenId && (
        <Modal
          isOpen={!!isOpenId}
          closeModal={() => setIsOpenId(null)}
          calculateTags={calculateTags}
          data={campers.find(elem => elem._id === isOpenId)}
        />
      )}
    </>
  );
};
