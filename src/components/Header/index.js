import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div>
        <span>trppd_</span>
      </div>
      <div className={styles.smallContainer}> 
        <span>My Collection</span>
        <span className={styles.user}>James Bond</span>
      </div>
    </header>
  )
}

export default Header;