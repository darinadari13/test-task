import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

function Footer() {
  return (
    <footer>
      <span>trpp_</span>
      <span>© 2022-2023</span>
      <div className={styles.container}>
        <span><InstagramOutlined /></span>
        <span><FacebookOutlined /></span>
        <span><TwitterOutlined /></span>
      </div>
    </footer>
  )
}

export default Footer;