import { Link } from 'react-router-dom';
import { FEATURED_SPOTS_DATA } from '../../data/const';
import styles from "./index.module.scss"

function FeaturedSpots() {
  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContainerText}>
          <h2>Featured Spots</h2>
          <span>Some of featured spot that ypumight want visit before you die</span>
          <Link className={styles.viewAll}>View All</Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.spotsList}>
          {FEATURED_SPOTS_DATA.map(({id, title, place, description, link, image, placeholder}) => (
            <div key={id} className={styles.spot}>
              <img className={styles.img} src={image} alt="spot"/>
              <h2 className={styles.title}>{title}</h2>
              <span className={styles.place}>{place}</span>
              <span>{description}</span>
              <Link to={link} className={styles.readMore}>read more</Link>
            </div>
          ))}
        </div>
        <div className={styles.outdoors}>Outdoors Edition</div>
      </div>
    </div>
  )
}

export default FeaturedSpots;