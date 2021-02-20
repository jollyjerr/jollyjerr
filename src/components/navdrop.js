import { Menu, Transition } from "@headlessui/react";

import { ChevronDown } from "react-ionicons";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const navdrop = ({ title, items }) => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span>
              <Menu.Button className="flex items-center cursor-pointer font-semibold">
                <span>{title}</span>
                <ChevronDown
                  cssClasses={`inline ${open ? "transform rotate-180" : ""}`}
                  width="14px"
                />
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-20"
              >
                <div className="py-1">
                  {items.map((i) => (
                    <Menu.Item key={i.title}>
                      {({ active }) =>
                        i.external ? (
                          <a
                            href={i.linkTo}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            {i.title}
                          </a>
                        ) : (
                          <Link
                            to={i.linkTo}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            {i.title}
                          </Link>
                        )
                      }
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

navdrop.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
};

export default navdrop;
