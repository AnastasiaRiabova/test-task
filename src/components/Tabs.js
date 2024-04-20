import { Tab } from '@headlessui/react';
import { Tag } from './Tag';
import { ReviewItem } from './ReviewItem';
import { Form } from './Form';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Tabs = ({ calculateTags, data }) => {
  const tabs = {
    Features: calculateTags({
      adults: data.adults,
      transmission: data.transmission,
      engine: data.engine,
      ...data.details,
    }),

    Reviews: data.reviews,
  };

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex gap-6 text-dark font-bold text-lg mb-3">
          {Object.keys(tabs).map(name => (
            <Tab
              key={name}
              className={({ selected }) =>
                classNames(
                  'relative',
                  selected
                    ? ' after:border-b-4 after:border-red after:absolute after:-bottom-3 after:right-0 after:left-0 '
                    : ''
                )
              }
            >
              {name}
            </Tab>
          ))}
        </Tab.List>
        <div className={'border-b border-grey-lightGrey w-full'}></div>
        <Tab.Panels className="mt-4">
          {Object.values(tabs).map((item, idx) => (
            <Tab.Panel key={idx}>
              <div className={'flex  justify-between gap-6'}>
                <div className={'w-1/2'}>
                  {idx === 0 ? (
                    <div>
                      <ul className={'flex flex-wrap gap-3'}>
                        {item.map(
                          (item, ind) =>
                            !!item.value && (
                              <li key={ind}>
                                <Tag
                                  key={item.key?.name}
                                  text={`${item.value > 1 ? item.value : ''} ${
                                    item.key?.name
                                  }`}
                                  icon={item.key?.icon}
                                />
                              </li>
                            )
                        )}
                      </ul>
                      <div className={'my-6'}>
                        <p className={'font-bold text-lg mb-3 text-dark '}>
                          Vehicle details
                        </p>
                        <div
                          className={
                            "border-b border-grey-lightGrey w-full my-2'"
                          }
                        ></div>
                        <div className={'my-3 flex flex-col gap-3 text-dark'}>
                          <div className={'flex justify-between'}>
                            <span>Form</span>{' '}
                            <span className={'capitalize'}>{data.form}</span>
                          </div>
                          <div className={'flex justify-between'}>
                            <span>Length</span>{' '}
                            <span className={'capitalize'}>{data.length}</span>
                          </div>
                          <div className={'flex justify-between'}>
                            <span>Width</span>{' '}
                            <span className={'capitalize'}>{data.width}</span>
                          </div>
                          <div className={'flex justify-between'}>
                            <span>Height</span>{' '}
                            <span className={'capitalize'}>{data.height}</span>
                          </div>
                          <div className={'flex justify-between'}>
                            <span>Tank</span>{' '}
                            <span className={'capitalize'}>{data.tank}</span>
                          </div>
                          <div className={'flex justify-between'}>
                            <span>Consumption</span>{' '}
                            <span className={'capitalize'}>
                              {data.consumption}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className={'flex flex-col gap-6'}>
                      {item.map((item, ind) => (
                        <li key={ind}>
                          <ReviewItem
                            name={item.reviewer_name}
                            rating={item.reviewer_rating}
                            comment={item.comment}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={'w-1/2 h-full'}>
                  <Form />
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
