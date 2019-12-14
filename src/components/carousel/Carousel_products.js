import React, { useState } from 'react'

import './carousel.css'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  const items = [
    {
      src: 'https://images.wallpaperscraft.com/image/books_old_reading_124989_1366x768.jpg',
      altText: 'Welcome to my website',
      caption: 'you can buy something good in my website'
    },
    {
      src: 'https://wallpapersmug.com/download/1366x768/f12332/books.jpg',
      altText: 'It Is Amaizing',
      caption: 'Go to Website'
    },
    {
      src: 'https://s1.1zoom.me/b2435/30/Library_Book_Lamp_569455_1366x768.jpg',
      altText: 'Books Is Knowlage',
      caption: 'Amaizing Books for kids'
    }
  ];
  
  const Carousel_products = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default Carousel_products;