import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './slider.css';

const Slider = () => {
  useEffect(() => {
 
    let swiper;
    const initializeSwiper = () => {
      const clientWidth = document.documentElement.clientWidth;

      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '#next',
          prevEl: '#prev',
        },
        observer: true,
        observeParents: true,
        parallax: true,
        preventClicksPropagation: false,
        preventClicks: false,
        slidesPerView: clientWidth < 1300 ? 1 : 3,
        watchOverflow: true,
        spaceBetween: 30,
      });

      const nextBtn = document.getElementById('next');
      const prevBtn = document.getElementById('prev');
      
      const handleNextClick = () => swiper.slideNext();
      const handlePrevClick = () => swiper.slidePrev();

      if (nextBtn) nextBtn.addEventListener('click', handleNextClick);
      if (prevBtn) prevBtn.addEventListener('click', handlePrevClick);

      return () => {
        if (nextBtn) nextBtn.removeEventListener('click', handleNextClick);
        if (prevBtn) prevBtn.removeEventListener('click', handlePrevClick);
      };
    };

    const cleanup = initializeSwiper();

    const handleResize = () => {
      cleanup();
      initializeSwiper(); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup();
    };
  }, []);

    return (
      <div className='cont cont2'>
        <div className="swiper-button-prev swiper-button-prev2" id='prev'>
          <img src={require('./images/shevron.png')} className='button-arrow-prev' alt='shevron'></img>
        </div>
          <div className="swiper swiper2">
            <div className="swiper-wrapper swiper-wrapper2">
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_1.png')} className='slide-image slide-image2' alt='Mask_group_1'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='one' className='slide-text slide-text2'>Высокая и оперативная скорость обработки заявки</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_2.png')} className='slide-image slide-image2' alt='Mask_group_2'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='two' className='slide-text slide-text2'>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" >
                <div className='slide-image-container slide-image-container2'>
                  <img src={require('./images/Mask_group_3.png')} className='slide-image slide-image2' alt='Mask_group_3'></img>
                </div>
                <div className='slide-text-container slide-text-container2'>
                  <div id='three' className='slide-text slide-text2'>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
                </div>
              </div>
              <div className="swiper-slide swiper-slide2" id='one'>Slide 1</div>
              <div className="swiper-slide swiper-slide2" id='two'>Slide 2</div>
              <div className="swiper-slide swiper-slide2" id='three'>Slide 3</div>
            </div>
          </div>
        <div className="swiper-button-next swiper-button-next2" id='next'>
          <img src={require('./images/shevron.png')} className='button-arrow-next' alt='shevron'></img>
        </div>
    </div>
    );
}

export default Slider;