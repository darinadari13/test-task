import { HOME_SLIDER_DATA } from '../../data/const';
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'antd';
import styles from './index.module.scss'
import React, { useState, useRef } from "react";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


function HomeSlider() {
  const ref = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const activeSlide = HOME_SLIDER_DATA[activeSlideIndex]

  const onChange = (currentSlideIndex) => {
    setActiveSlideIndex(currentSlideIndex)
  };

  const onNextSlide = () => {
    ref.current.next()
  };

  const onPrevSlide = () => {
    ref.current.prev()
  };

  return (
    <div className={styles.root}>
      <Carousel ref={ref} afterChange={onChange} dots={false}>
        {HOME_SLIDER_DATA.map(({ id, title, description, link, image }) => (
          <div key={id} className={styles.slide}>
            <div className={styles.slideContent}>
              <div className={styles.slideInfo}>
                <h1 className={styles.slideTitle}>{title}</h1>
                <p>{description}</p>
                <Link className={styles.link} to={link}>Read more</Link>
              </div>
            </div>
            <div className={styles.slideBackground} style={{ backgroundImage: `url(${image})` }} />
          </div>
        )
        )}
      </Carousel>
      <div className={styles.controls}>
        <div className={styles.controlsButtons}>
          <Button
            className={styles.arrowButton}
            shape="circle"
            icon={<LeftOutlined className={styles.controlsArrow} />}
            onClick={onPrevSlide}
          />
          <Button
            className={styles.arrowButton}
            shape="circle"
            icon={<RightOutlined className={styles.controlsArrow} />}
            onClick={onNextSlide}
          />
          <span className={styles.controlsPlaceholder}>{activeSlide.placeholder}</span>
        </div>
        <span className={styles.controlsIndicator}>{activeSlideIndex + 1}/{HOME_SLIDER_DATA.length}</span>
      </div>
    </div>
  )
}

export default HomeSlider;