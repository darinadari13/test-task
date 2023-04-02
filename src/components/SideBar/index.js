import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { APP_SECTIONS } from '../../data/const';

function SideBar () {
  return (
    <nav className={styles.navigation}>
      {APP_SECTIONS.map(({ id, title, path}) => (
        <NavLink
          key={id}
          className={({ isActive }) => isActive ? styles.linkActive : styles.link}
          to={path}
        >
          {title}
        </NavLink>   
      ))}
    </nav>
  )
}

export default SideBar;