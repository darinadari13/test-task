import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.logo}>
        <h1>trppd_</h1>
      </div>
      <strong>© 2022-2023</strong>
      <div className={styles.container}>
        <span><InstagramOutlined /></span>
        <span><FacebookOutlined /></span>
        <span><TwitterOutlined /></span>
      </div>
    </footer>
  )
}

export default Footer;