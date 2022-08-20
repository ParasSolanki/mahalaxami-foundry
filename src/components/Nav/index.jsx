import { h } from 'preact'
import { useState } from 'preact/hooks'
import logo from '@/assets/logo.svg'

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

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const LinkWithDropdown = ({ link }) => (
  <li className="dropdown">
    <label
      tabindex="0"
      className="0 inline-flex cursor-pointer items-center rounded text-base font-medium  text-gray-700 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
    >
      {link.name}
      <span className="ml-1.5">
        <ChevronDownIcon />
      </span>
    </label>
    <ul
      tabindex="0"
      className="dropdown-content menu mt-5 w-64 rounded-md bg-white p-2 shadow"
    >
      {link.childern.map((linkItem) => (
        <li>
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

function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
        onClick={() => {
          document.body.classList.add('overflow-hidden')
          setMobileMenuOpen(true)
        }}
      >
        <span class="sr-only">Open main menu</span>
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
      </button>
      {mobileMenuOpen && (
        <div
          class="fixed inset-x-0 top-0 z-50 h-full w-full origin-top-right transform bg-black/50 p-2 backdrop-blur-sm transition"
          onClick={() => {
            document.body.classList.remove('overflow-hidden')
            setMobileMenuOpen(false)
          }}
        >
          <div
            class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <a
                href="/"
                className="rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                <div className="w-36">
                  <img src={logo} alt="logo" className="h-full w-full" />
                </div>
              </a>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                  onClick={() => {
                    document.body.classList.remove('overflow-hidden')
                    setMobileMenuOpen(false)
                  }}
                >
                  <span class="sr-only">Close main menu</span>

                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ul class="space-y-1 px-2 pt-2 pb-3">
              {links.map((link) => (
                <li>
                  <a
                    href={link.href}
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function Nav() {
  return (
    <header className="flex h-24 w-full  items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="">
            <a
              href="/"
              className="rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
            >
              <div className="w-36">
                <img src={logo} alt="logo" className="h-full w-full" />
              </div>
            </a>
          </div>
          <div className="flex justify-end">
            <div className="block md:hidden">
              <MobileNav />
            </div>
            <nav className="hidden md:block">
              <ul className="hidden items-center space-x-6 md:flex">
                {links.map((link) => {
                  return link?.childern ? (
                    <LinkWithDropdown link={link} />
                  ) : (
                    <li>
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
        </div>
      </div>
    </header>
  )
}

export default Nav
