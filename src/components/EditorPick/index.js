import { EDITOR_PICK_DATA } from '../../data/const';
import { Carousel, Button, Popover } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState, useRef } from "react";
import styles from './index.module.scss';

function EditorPick() {
  const ref = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  
  // const activeSlide = EDITOR_PICK_DATA[activeSlideIndex];

  const onChange = (currentSlideIndex) => {
    setActiveSlideIndex(currentSlideIndex)
  };


  const onNextSlide = () => {
    ref.current.next()
  };

  const onPrevSlide = () => {
    ref.current.prev()
  };

  const renderGridSlide = (items, index) => {
    return (
      <div key={index}>
        <div className={styles.gridSlide}>
          <div className={styles.gridSlideImage1} style={{ backgroundImage: `url(${items[0].image})`}} />
          <div className={styles.gridSlideImage2} style={{ backgroundImage: `url(${items[1].image})`}} />
          <div className={styles.gridSlideImage3} style={{ backgroundImage: `url(${items[2].image})`}} />
          <div className={styles.gridSlideImage4} style={{ backgroundImage: `url(${items[3].image})`}} />
          <div className={styles.gridSlideImage5} style={{ backgroundImage: `url(${items[4].image})`}} />
        </div>
      </div>
    )
  }

  return (
    <section className={styles.root}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContainerText}>
          <h2>Editor's Pick</h2>
          <span>Our picks, just for you nam an vidisse admodum omittantur nihil corrumpit</span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.sliderIndicators}>
          <div className={styles.buttonsContainer}>
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
          </div>
          <span className={styles.controlsIndicator}>{activeSlideIndex + 1}/{EDITOR_PICK_DATA.length}</span>
        </div>
        <div>
        <Carousel ref={ref} dots={false} afterChange={onChange}>
          {EDITOR_PICK_DATA.map(renderGridSlide)}
        </Carousel>
        </div>
      </div>
    </section>
  )
}

export default EditorPick;