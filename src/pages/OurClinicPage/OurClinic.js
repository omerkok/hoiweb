import React from 'react';
import Divider from '@mui/material/Divider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OurClinicRender1 from '../../images/OurClinicRender1.png';
import Asset from '../../images/Asset.png';
import BgMobile2 from '../../images/BgMobile2.svg';
import { globalStyles } from '../../assets/Styles';
import '../../components/Footer/Footer.css';


const OurClinicContent = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '' + '</span>';
    },
  };
  return (
    <div style={styles.container2}>
      <div style={styles.subcontainer2}>
        <span style={styles.title}>{'WELCOME TO'}</span>
        <span style={styles.title2}>{'HAIR OF ISTANBUL'}</span>
      </div>
      <img
        src={OurClinicRender1}
        style={{
          width: '80%',
          objectFit: 'contain',
          zIndex: 1,
        }}
        alt='BeforeAfter'
      />
      <div style={styles.container3}>
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
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'CLINIC'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'OPERATION ROOM'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'KITCHEN'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'KITCHEN'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
        </Swiper>
        <span style={styles.enjoyTitle}>{"YOU'LL ENJOY"}</span>
        <p style={styles.enjoyP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
    </div>
  );
};

const OurClinic = () => {
  return (
    <div style={styles.container}>
      <Header />
      <OurClinicContent />
      <Footer beforeAfter={false} linkExtra={true} />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subcontainer2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    marginBottom: -90,
  },
  title: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: globalStyles.h30,
    width: '80%',
  },
  title2: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h48,
    marginBottom: '2%',
    width: '80%',
  },
  swiperStyles: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2%',
  },
  swiperImage: {
    width: '100%',
    objectFit: 'contain',
    marginBottom: '5%',
    marginTop: '1%',
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
  divider3: {
    width: 'auto',
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  divider4: {
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  enjoyTitle: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h48,
    marginTop: '4%',
    marginBottom: '2%',
    width: '80%',
  },
  enjoyP: {
    fontFamily: 'PoppinsRegular',
    width: '100%',
    color: globalStyles.greyColor,
    fontSize: globalStyles.h16,
  },
  backgroundImage1: {
    opacity: 0.2,
    width: '100%',
    height: '500%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -10,
  },
  container2: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  container3: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12%',
  },
};

export default OurClinic;
