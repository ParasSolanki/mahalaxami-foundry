import { h } from 'preact'
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
    href: '/products',
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
              {links.map((link) => (
                <li>
                  <a
                    className="text-base text-slate-600 hover:text-sky-400 focus:text-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-400 rounded"
                    href={link.href}
                    title={link.name}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav
