import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>trppd_</h1>
      </div>
      <div className={styles.smallContainer}> 
        <span>My Collection</span>
        <span>|</span>
        <span>James Bond</span>
        <img className={styles.avatar} alt="avatar" src="https://picsum.photos/40" />
      </div>
    </header>
  )
}

export default Header;