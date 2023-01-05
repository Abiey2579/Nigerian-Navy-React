import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  HandRaisedIcon,
  FlagIcon,
  HomeModernIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LogoStamp from "./LogoStamp";
import ColorPalette from "../../../Asset/navy-color";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "#",
    icon: HomeModernIcon,
  },
  {
    name: "Requirements",
    href: "#",
    icon: FlagIcon,
  },
  {
    name: "FAQ",
    href: "#",
    icon: HandRaisedIcon,
  },
];

const NavigationBar = () => {
  return (
    <Popover className="relative bg-white z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-1 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <LogoStamp />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link to={"/"}>
              <span className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </span>
            </Link>
            <Link to={"/requirements"}>
              <span className="text-base font-medium text-gray-500 hover:text-gray-900">
                Requirements
              </span>
            </Link>
            <Link to={"/faq"}>
              <span className="text-base font-medium text-gray-500 hover:text-gray-900">
                FAQ
              </span>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <Link to={"/application"}>
              <span
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-[5px] border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-600"
                style={{ backgroundColor: ColorPalette.Dark_Blue }}
              >
                APPLY
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <LogoStamp />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 "
                        aria-hidden="true"
                        style={{ color: ColorPalette.Dark_Blue }}
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  style={{ backgroundColor: ColorPalette.Dark_Blue }}
                >
                  APPLY FOR NAVY
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className=" hover:text-indigo-600"
                    style={{ color: ColorPalette.Dark_Blue }}
                  >
                    SIGN IN
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavigationBar;
