import { ABOVE_THE_SEA_DATA } from '../../data/const';
import { Link } from 'react-router-dom';
import styles from "./index.module.scss";

function AboveTheSea() {
  return (
    <section className={styles.root}>
      {ABOVE_THE_SEA_DATA.map(({id, title, quote, description, link, image})=> (
        <div key={id} className={styles.mainContainer}>
          <img className={styles.img} src={image} alt="ocean"/>
          <div className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.quote}>"{quote}"</span>
            <span className={styles.description}>{description}</span>
            <Link to={link} className={styles.link}>Read More</Link>
          </div>
        </div>
      ))}
    </section>
  )
} 

export default AboveTheSea;