import { Link } from 'react-router-dom';
import { FEATURED_SPOTS_DATA } from '../../data/const';
import styles from "./index.module.scss"

function FeaturedSpots() {
  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>
        <h2>Featured Spots</h2>
        <span>Some of featured spot that ypumight want visit before you die</span>
        <span className={styles.viewAll}>View All</span>
      </div>
      <div className={styles.rightContainer}>
        {FEATURED_SPOTS_DATA.map(({id, title, place, description, link, image}) => (
          <div key={id} className={styles.spot}>
            <img className={styles.img} src={image} alt="spot"/>
            <h2>{title}</h2>
            <span>{place}</span>
            <span>{description}</span>
            <Link to={link}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedSpots;