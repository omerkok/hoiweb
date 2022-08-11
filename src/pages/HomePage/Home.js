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
import CustomButton from '../../components/CustomButton';
import OurClinicSlide from '../../components/OurClinicSlide';
import StagesSlide from '../../components/StagesSlide';
import HairTypeHeader from '../../components/HairTypeHeader';
import ContactUsImg from '../../images/ContactUsImg.png';
import BgMobile2 from '../../images/BgMobile2.svg';
import { globalStyles } from '../../assets/Styles';
import '../../components/Footer/Footer.css';

const Stages = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '' + '</span>';
    },
  };
  return (
    <div style={styles.stagesContainer}>
      <div style={styles.stagesBg1}></div>
      <div style={styles.stagesBg2}></div>
      <span style={styles.stagesTitleStyle}>{'STAGES'}</span>
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
          <StagesSlide />
        </SwiperSlide>
        <SwiperSlide>
          <StagesSlide />
        </SwiperSlide>
        <SwiperSlide>
          <StagesSlide />
        </SwiperSlide>
        <SwiperSlide>
          <StagesSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const OurClinic = () => {
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
          <span style={styles.swiperTitle}>
            <Divider style={styles.divider3} />
            {'CLINIC'}
            <Divider style={styles.divider4} />
          </span>
          <OurClinicSlide />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>
            <Divider style={styles.divider3} />
            {'OPERATION ROOM'}
            <Divider style={styles.divider4} />
          </span>
          <OurClinicSlide />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>
            <Divider style={styles.divider3} />
            {'KITCHEN'}
            <Divider style={styles.divider4} />
          </span>
          <OurClinicSlide />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>
            <Divider style={styles.divider3} />
            {'KITCHEN'}
            <Divider style={styles.divider4} />
          </span>
          <OurClinicSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const HairType = () => {
  return (
    <div style={styles.hairTypeContainer}>
      <div style={styles.hairTypeBackground}></div>
      <div style={styles.hairTypeSubContainer}>
        <div style={styles.hairTypeItemCont}>
          <div style={styles.hairTypeWhiteBg}></div>
          <img
            src={ContactUsImg}
            style={{ width: '100%', objectFit: 'contain' }}
          />
          <div style={styles.hairTypeButtonCont}>
            <span style={styles.hairTypeText}>{'HAIR TRANSPLANT'}</span>
            <Divider style={styles.hairTypeDivider} />
            <CustomButton
              width={'60%'}
              text={'DISCOVER'}
              backgroundColor={globalStyles.whiteColor}
              textColor={globalStyles.greenColor}
              borderRadius={20}
              fontSize={globalStyles.h16}
              onPress={() => {}}
            />
          </div>
        </div>
        <div style={styles.hairTypeItemCont}>
          <div style={styles.hairTypeWhiteBg}></div>
          <img
            src={ContactUsImg}
            style={{ width: '100%', objectFit: 'contain' }}
          />
          <div style={styles.hairTypeButtonCont}>
            <span style={styles.hairTypeText}>{'HAIR TRANSPLANT'}</span>
            <Divider style={styles.hairTypeDivider} />
            <CustomButton
              width={'60%'}
              text={'DISCOVER'}
              backgroundColor={globalStyles.whiteColor}
              textColor={globalStyles.greenColor}
              borderRadius={20}
              fontSize={globalStyles.h16}
              onPress={() => {}}
            />
          </div>
        </div>
        <div style={styles.hairTypeItemCont}>
          <div style={styles.hairTypeWhiteBg}></div>
          <img
            src={ContactUsImg}
            style={{ width: '100%', objectFit: 'contain' }}
          />
          <div style={styles.hairTypeButtonCont}>
            <span style={styles.hairTypeText}>{'HAIR TRANSPLANT'}</span>
            <Divider style={styles.hairTypeDivider} />
            <CustomButton
              width={'60%'}
              text={'DISCOVER'}
              backgroundColor={globalStyles.whiteColor}
              textColor={globalStyles.greenColor}
              borderRadius={20}
              fontSize={globalStyles.h16}
              onPress={() => {}}
            />
          </div>
        </div>
        <div style={styles.hairTypeItemCont}>
          <div style={styles.hairTypeWhiteBg}></div>
          <img
            src={ContactUsImg}
            style={{ width: '100%', objectFit: 'contain' }}
          />
          <div style={styles.hairTypeButtonCont}>
            <span style={styles.hairTypeText}>{'HAIR TRANSPLANT'}</span>
            <Divider style={styles.hairTypeDivider} />
            <CustomButton
              width={'60%'}
              text={'DISCOVER'}
              backgroundColor={globalStyles.whiteColor}
              textColor={globalStyles.greenColor}
              borderRadius={20}
              fontSize={globalStyles.h16}
              onPress={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//   <img src={BgMobile2} style={styles.backgroundImage1} />

const Home = () => {
  return (
    <div style={styles.container}>
    
      <Header />
      <Stages />
      <OurClinic />
      <HairType />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    marginTop: '40%',
  },
  hairTypeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  hairTypeSubContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hairTypeItemCont: {
    width: '23%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  hairTypeWhiteBg: {
    width: '100%',
    height: '100%',
    backgroundColor: globalStyles.whiteGreyColor,
    position: 'absolute',
    zIndex: -1,
    borderRadius: 25,
  },
  hairTypeButtonCont: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '7%',
    paddingBottom: '7%',
    borderRadius: 25,
    backgroundColor: globalStyles.greenColor,
  },
  hairTypeText: {
    width: '90%',
    color: globalStyles.whiteColor,
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h24,
  },
  hairTypeDivider: {
    backgroundColor: globalStyles.yellowColor,
    width: '40%',
    height: 1,
    marginTop: '2.5%',
    marginBottom: '7%',
  },
  hairTypeBackground: {
    width: '100%',
    height: '45%',
    position: 'absolute',
    zIndex: -2,
    backgroundColor: globalStyles.bejColor,
  },
  swiperStyles: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2%',
  },
  ourClinicContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '10%',
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
  divider3: {
    width: 'auto',
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  divider4: {
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  stagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '10%',
    marginBottom: '10%',
    position: 'relative',
  },
  stagesTitleStyle: {
    width: '80%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    marginBottom: '1%',
  },
  stagesBg1: {
    width: '43%',
    height: '30%',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: globalStyles.whiteGreyColor,
    zIndex: -1,
  },
  stagesBg2: {
    width: '40%',
    height: '25%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: globalStyles.whiteGreyColor,
    zIndex: -1,
  },
  backgroundImage1: {
    opacity: 0.2,
    width:'100%',
    height:'600%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -10,
  },
};

export default Home;
