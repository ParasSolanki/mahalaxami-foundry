import { h } from 'preact'
import Styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Mahalaxmi Foundry
    </footer>
  )
}
export default Footer
