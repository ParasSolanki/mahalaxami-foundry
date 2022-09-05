import { Fragment } from 'react'
import logo from '@/assets/logo.svg'
import { Popover, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About us',
    href: '/about-us',
  },
  {
    name: 'Products',
    childern: [
      { name: 'Pillar / Driling Machine Column', href: '/pillar' },
      {
        name: 'Coupling / Rolling Mill Coupling Machine Column',
        href: '/coupling',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Enquiry',
    href: '/enquiry',
  },
]

const LinkWithDropdown = ({ link }) => (
  <li className="dropdown">
    <label
      tabIndex="0"
      className="0 inline-flex cursor-pointer items-center rounded text-base font-medium  text-gray-700 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
    >
      {link.name}
      <span className="ml-1.5">
        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
      </span>
    </label>
    <ul
      tabIndex="0"
      className="dropdown-content menu mt-5 w-64 rounded-md bg-white p-2 shadow"
    >
      {link.childern.map((linkItem) => (
        <li key={linkItem.name}>
          <a
            className="text-sm focus:bg-sky-400 focus:text-white"
            href={linkItem.href}
            title={linkItem.name}
          >
            {linkItem.name}
          </a>
        </li>
      ))}
    </ul>
  </li>
)

function Nav() {
  return (
    <header className="relative bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="relative z-50 bg-white">
          <Popover>
            <div className="relative">
              <nav
                className="relative flex items-center justify-between"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a
                      href="/"
                      className="rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <div className="w-36">
                        <img src={logo} alt="logo" className="h-full w-full" />
                      </div>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                        <span className="sr-only">Open main menu</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        </svg>
                      </Popover.Button>
                      <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur backdrop-filter" />
                    </div>
                  </div>
                </div>
                <ul className="hidden md:ml-10 md:flex md:space-x-8 md:pr-4">
                  {links.map((link) => {
                    return link?.childern ? (
                      <LinkWithDropdown link={link} key={link.name} />
                    ) : (
                      <li key={link.name}>
                        <a
                          className="rounded text-base font-medium text-gray-700 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
                          href={link.href}
                          title={link.name}
                        >
                          {link.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="fixed inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <a
                        href="/"
                        className="rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                      >
                        <div className="w-36">
                          <img
                            src={logo}
                            alt="logo"
                            className="h-full w-full"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Popover.Button>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1 px-2 pt-2 pb-3">
                    {links.map((link) => {
                      return link?.childern ? (
                        <Menu
                          as="li"
                          className="relative block text-left"
                          key={link.href}
                        >
                          <div>
                            <Menu.Button className="inline-flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900">
                              {link.name}
                              <ChevronDownIcon
                                className="h-6 w-6 text-gray-500"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 -translate-y-4"
                            enterTo="transform opacity-100 translate-y-0"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 translate-y-0"
                            leaveTo="transform opacity-0 -translate-y-4"
                          >
                            <Menu.Items className="mt-2 w-full origin-top divide-y divide-gray-100 focus:outline-none">
                              <div className="pl-4">
                                {link.childern.map((item) => (
                                  <Menu.Item key={item.href}>
                                    <a
                                      href={item.href}
                                      className="block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                      {item.name}
                                    </a>
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                          >
                            {link.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Nav
