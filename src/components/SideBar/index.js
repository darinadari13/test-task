import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { APP_SECTIONS } from '../../data/const';

function SideBar () {
  return (
    <nav className={styles.navigation}>
      {APP_SECTIONS.map(({ id, title, path}) => (
        <Link key={id} className={styles.link} to={path}>{title}</Link>   
      ))}
    </nav>
  )
}

export default SideBar;