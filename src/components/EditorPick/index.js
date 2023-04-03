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


  return (
    <section className={styles.root}>
      <div lassName={styles.textContainer}>
        <span>Editor's Pick</span>
        <span>Our picks, just for you nam an vidisse admodum omittantur nihil corrumpit</span>
      </div>
      <div className={styles.sliderContainer}>
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
        <span className={styles.controlsIndicator}>{activeSlideIndex + 1}/{EDITOR_PICK_DATA.length}</span>
        <Carousel ref={ref} dots={false} slidesToShow={5} slidesToScroll={5} afterChange={onChange}>
          {EDITOR_PICK_DATA.map(subArray => subArray.map(({id, image, title, place, description}) => (
            <div className={styles.slide} key={id}>
              <Popover content={<div><span>{title}</span><span>{place}</span><span>{description}</span></div>} placement="bottom"
              overlayClassName={styles.popover}>
                <img className={styles.img} src={image} alt="tower"/>
              </Popover>
            </div>
          )
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default EditorPick;