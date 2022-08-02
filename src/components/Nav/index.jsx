import { h } from 'preact'
import logo from '@/assets/logo.svg'
import { BASE_URL } from '@/constants'

const links = [
  {
    name: 'Home',
    href: `${BASE_URL}/`,
  },
  {
    name: 'About us',
    href: `${BASE_URL}/about-us`,
  },
  {
    name: 'Products',
    childern: [
      { name: 'Pillar / Driling Machine Column', href: `${BASE_URL}/pillar` },
      {
        name: 'Coupling / Rolling Mill Coupling Machine Column',
        href: `${BASE_URL}/coupling`,
      },
    ],
  },
  {
    name: 'Contact',
    href: `${BASE_URL}/contact`,
  },
  {
    name: 'Enquiry',
    href: `${BASE_URL}/enquiry`,
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
      className="inline-flex items-center text-base text-slate-600 cursor-pointer hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-400 rounded"
    >
      {link.name}
      <span className="ml-1.5">
        <ChevronDownIcon />
      </span>
    </label>
    <ul
      tabindex="0"
      className="dropdown-content menu p-2 shadow w-64 bg-white mt-5 rounded-md"
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

function Nav() {
  return (
    <header className="h-24">
      <div className="container  py-5 mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black rounded"
          >
            <div className="w-36">
              <img src={logo} alt="logo" className="w-full h-full" />
            </div>
          </a>
          <nav>
            <ul className="flex items-center space-x-6">
              {links.map((link) => {
                return link?.childern ? (
                  <LinkWithDropdown link={link} />
                ) : (
                  <li>
                    <a
                      className="text-base text-slate-600 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-400 rounded"
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
    </header>
  )
}

export default Nav
