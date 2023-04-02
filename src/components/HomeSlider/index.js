import { HOME_SLIDER_DATA } from '../../data/const';
import { Carousel, Button } from 'antd';
import styles from './index.module.scss'



function HomeSlider() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {HOME_SLIDER_DATA.map(({ id, title, description, link, image }) => (
        <div key={id} className={styles.slide}>
          <div className={styles.slideContent}>
            <div className={styles.slideInfo}>
              <h1>{title}</h1>
              <p>{description}</p>
              <Button type="primary" shape="round">{link}</Button>
            </div>
          </div>
          <div className={styles.slideBackground} style={{ backgroundImage: `url(${image})` }} />
        </div>
      )
      )}
    </Carousel>
  )
}

export default HomeSlider;