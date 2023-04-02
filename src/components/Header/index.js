import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>trppd_</h1>
      </div>
      <div className={styles.smallContainer}> 
        <span>My Collection</span>
        <span className={styles.user}>James Bond</span>
      </div>
    </header>
  )
}

export default Header;