import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';
import styles from './index.module.scss'

function Layout () {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header/>
      </div>
      <div className={styles.sidebarContainer}>
        <SideBar/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;
