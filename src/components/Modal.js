import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Icon } from './Icon';
import { map_pin, star, closeBtn } from '../assets/icons';
import { Tabs } from './Tabs';

export const Modal = ({ isOpen, closeModal, data, calculateTags }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-dark mb-2"
                >
                  <div className={'flex items-center gap-2 justify-between'}>
                    <h5 className={'font-bold'}>{data?.name}</h5>
                    <div className={'flex items-center gap-2'}>
                      <span onClick={closeModal} className={'cursor-pointer'}>
                        <Icon icon={closeBtn} fill={'none'} />
                      </span>
                    </div>
                  </div>
                </Dialog.Title>
                <div>
                  <div className={'flex items-center gap-1'}>
                    <Icon icon={star} width={'15px'} height={'15px'} />
                    <div
                      className={
                        'flex items-center gap-1 border-b border-grey-text'
                      }
                    >
                      <div>{data.rating}</div>
                      <div className={'mr-2'}>
                        ({data.reviews.length} Reviews)
                      </div>
                    </div>
                    <Icon
                      icon={map_pin}
                      fill={'none'}
                      width={'15px'}
                      height={'15px'}
                    />
                    <div>{data.location}</div>
                  </div>
                  <div className="font-bold my-4">
                    {'€' + data.price.toFixed(2)}
                  </div>
                </div>
                <div className="h-[80vh] overflow-auto pr-2">
                  <div className="text-sm text-grey-text flex flex-col gap-3">
                    <div className={'flex flex-wrap gap-3'}>
                      {data.gallery.map(foto => (
                        <div key={foto}>
                          <img
                            src={foto}
                            alt="camper foto"
                            className={
                              'rounded-lg inline-block w-[300px] h-[300px] object-cover'
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className={'text-grey-text'}>{data.description}</div>
                    <Tabs calculateTags={calculateTags} data={data} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
