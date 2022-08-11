import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeaderTop from '../HeaderTop';
import HeaderBottom from '../HeaderBottom';
import HairTypeHeader from '../HairTypeHeader';
import { globalStyles } from '../../assets/Styles';
import '../Footer/Footer.css';

const HairType = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '' + '</span>';
    },
  };
  return (
    <div style={styles.ourClinicContainer}>
      <Swiper
        style={styles.swiperStyles}
        autoplay={true}
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <HairTypeHeader />
        </SwiperSlide>
        <SwiperSlide>
          <HairTypeHeader />
        </SwiperSlide>
        <SwiperSlide>
          <HairTypeHeader />
        </SwiperSlide>
        <SwiperSlide>
          <HairTypeHeader />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <HeaderTop />
        <HeaderBottom />
        <div
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: globalStyles.greenColor,
            position: 'absolute',
            top: '40%',
            zIndex:  -1,
          }}>
          {''}
        </div>
        <HairType />
      </div>
    </>
  );
};

const styles = {
  swiperStyles: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '3.5%',
  },
  ourClinicContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  swiperTitle: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h42,
    width: 'auto',
    border: 2,
    borderColor: globalStyles.greenColor,
    display: 'inline-block',
    marginBottom: '1%',
  },
};

export default Header;
