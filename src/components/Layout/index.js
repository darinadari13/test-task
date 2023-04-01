import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';
import styles from './index.module.scss'

function Layout () {
  return (
    <div className={styles.container}>
      <Outlet/>
      <Header/>
      <SideBar/>
      <Footer/>
    </div>
  );
};

export default Layout;
