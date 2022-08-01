import { h } from 'preact'
import Styles from './styles.module.scss'
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
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <div className="w-36">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
      </a>
      {links.map((link) => (
        <a className={Styles.link} href={link.href} title={link.name}>
          {link.name}
        </a>
      ))}
    </nav>
  )
}
export default Nav
