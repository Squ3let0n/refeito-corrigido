import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import menuOptions from './flyoutMenuImpl';


export default function FlyoutMenu() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (

    < section >
      {
        menuOptions.map((item) => (
          <Popover key={item.name} className="inline-flex justify-center sm:ml-4" >
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 focus:outline-none" >
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  'rounded-md px-3 py-2 text-sm font-medium no-underline',
                selectedItem === item ? 'bg-yellow-600 text-white' : 'text-gray-300  hover:text-white'
                )}
                aria-current={item.current ? 'page' : undefined}
                onClick={() => handleItemClick(item)}
                style={{ outline: 'none' }}
              >
                {item.name}
                <ChevronDownIcon className="h-6 w-6 inline-flex sm:ml-1" aria-hidden="true" />
              </a>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {item.options.map((option) => (
                      <div key={option.type} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div>
                          <a href={option.href} className="font-semibold text-gray-900 no-underline">
                            {option.type}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        ))
      }
    </section >
  );
}
