import { MOUNTAIN_COLLECTIONS_DATA } from '../../data/const';
import { Link } from 'react-router-dom';
import styles from "./index.module.scss";

function MountainCollections() {
  return (
    <section className={styles.root}>
      <div className={styles.textContainer}>
        <h2 className={styles.header}>Mountain Collections</h2>
        <p>See our best lorem Ipsum is simply dummy text<br />  of the printing and typesetting industry,<br /> lorem Ipsum has been the indus</p>
      </div>
      <div>
        {MOUNTAIN_COLLECTIONS_DATA.map(({id, title, place, description, link, image}) => (
          <div key={id} className={styles.listItem}>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <span className={styles.place}>{place}</span>
              <p>{description}</p>
              <Link to={link} className={styles.link}>Read More</Link>
            </div>
            <img className={styles.img} src={image} alt="mountain"/> 
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default MountainCollections;