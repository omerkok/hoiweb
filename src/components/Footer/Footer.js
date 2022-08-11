import React from 'react';
import { Link } from '@mui/material';
import {
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IconButton from '@mui/material/IconButton';
import ContactUsForm from '../ContactUsForm';
import BlogPost from '../BlogPost';
import BeforeAfterSlide from '../BeforeAfterSlide';
import { globalStyles } from '../../assets/Styles';
import AboutUsImage from '../../images/AboutUsImg.png';
import HomePageBg from '../../images/HomePageBg.svg';
import '../../assets/Styles/PStyles.css';
import './Footer.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const BeforeAfter = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '' + '</span>';
    },
  };
  return (
    <div style={styles.beforeAfterContainer}>
      <div style={styles.beforeAfterSubcontainer}>
      </div>
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
          <BeforeAfterSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeAfterSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeAfterSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeAfterSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '10%',
      }}>
      <div style={styles.grayContainer}></div>
      <div style={styles.aboutUsContainer}>
        <div style={styles.aboutUsSubcontainer}>
          <span style={styles.textStyle}>{'ABOUT US'}</span>
          <p className='line7' style={styles.pStyle3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commod
          </p>
        </div>
        <div style={styles.aboutUsSubcontainer}>
          <img src={AboutUsImage} style={styles.image} alt='Hoi' />
        </div>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <div style={styles.subContainer}>
      <div style={styles.rightContainer}>
        <IconButton style={styles.iconButtonWp}>
          <WhatsappOutlined style={styles.iconWp} />
        </IconButton>
        <span style={styles.contact}>{'contact us'}</span>
        <div style={styles.iconsContainer}>
          <IconButton style={styles.iconButton}>
            <Instagram style={styles.icon} />
          </IconButton>
          <IconButton style={styles.iconButton}>
            <FacebookOutlined style={styles.icon} />
          </IconButton>
          <IconButton style={styles.iconButton}>
            <Twitter style={styles.icon} />
          </IconButton>
          <IconButton style={styles.iconButton}>
            <YouTube style={styles.icon} />
          </IconButton>
          <IconButton style={styles.iconButton}>
            <LinkedIn style={styles.icon} />
          </IconButton>
        </div>
        <span style={styles.follow}>{'follow us'}</span>
      </div>
      <div style={styles.menuContainer}>
        <div style={styles.menuSubcontainer}>
          <span style={styles.linkTitle}>{'HAIR TRANSPLANT'}</span>
          <Link href='#' underline='none' style={styles.link}>
            {'HAIR TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'BEARD TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'AFRO TYPE'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'WOMAN TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'EYEBROW'}
          </Link>
        </div>
        <div style={styles.menuSubcontainer}>
          <span style={styles.linkTitle}>{'BEARD TRANSPLANT'}</span>
          <Link href='#' underline='none' style={styles.link}>
            {'HAIR TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'BEARD TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'AFRO TYPE'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'WOMAN TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'EYEBROW'}
          </Link>
        </div>
        <div style={styles.menuSubcontainer}>
          <span style={styles.linkTitle}>{'AFRO TYPE'}</span>
          <Link href='#' underline='none' style={styles.link}>
            {'HAIR TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'BEARD TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'AFRO TYPE'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'WOMAN TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'EYEBROW'}
          </Link>
        </div>
        <div style={styles.menuSubcontainer}>
          <span style={styles.linkTitle}>{'WOMAN'}</span>
          <Link href='#' underline='none' style={styles.link}>
            {'HAIR TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'BEARD TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'AFRO TYPE'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'WOMAN TRANSPLANTATION'}
          </Link>
          <Link href='#' underline='none' style={styles.link}>
            {'EYEBROW'}
          </Link>
        </div>
      </div>
    </div>
  );
};

const LinkExtra = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        backgroundColor: globalStyles.greenOpacity3,
        marginBottom: '10%',
      }}>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'BEARD TRANSPLANT'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'WOMAN HAIR TRANSPLANT'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'AFRO AMERICAN TYPE'}
          </Link>
        </div>
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'FAQ'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'BLOG'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'BEFORE & AFTER'}
          </Link>
        </div>
        <div
          style={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'EYEBROW TRANSPLANT'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'DHI METHOD'}
          </Link>
          <Link href='#' underline='none' style={styles.linkExtraStyle}>
            {'FUE METHOD'}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ contact = true, beforeAfter = true, linkExtra = false }) => {
  return (
    <div style={styles.container}>
      {beforeAfter && <BeforeAfter />}
      <BlogPost />
      {contact && <ContactUsForm />}
      <AboutUs />
      {linkExtra && <LinkExtra />}
      <FooterBottom />
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
  subContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: globalStyles.greenColor,
    paddingTop: '8%',
    paddingBottom: '8%',
  },
  rightContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  iconsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 25,
    width: 25,
    color: globalStyles.greenColor,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: width * 0.5,
    padding: 4,
  },
  iconButton: {
    height: 25,
    width: 25,
  },
  iconWp: {
    height: 37,
    width: 37,
    color: globalStyles.greenColor,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: width * 0.5,
    padding: 4,
  },
  iconButtonWp: {
    height: 37,
    width: 37,
  },
  dividerConst: {
    width: '80%',
    height: 2,
    backgroundColor: globalStyles.whiteColor,
    marginTop: '6%',
    marginBottom: '6%',
  },
  contact: {
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h16,
    color: globalStyles.whiteColor,
    marginTop: '3%',
    marginBottom: '13%',
  },
  follow: {
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h16,
    color: globalStyles.whiteColor,
    marginTop: '3%',
  },
  menuContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  menuSubcontainer: {
    width: '24%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkTitle: {
    fontFamily: 'PoppinsRegular',
    color: globalStyles.whiteColor,
    fontSize: globalStyles.h16,
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom: '6%',
  },
  link: {
    fontFamily: 'PoppinsRegular',
    color: globalStyles.whiteColor,
    fontSize: globalStyles.h12,
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom: '2%',
  },
  linkExtraStyle: {
    width: '100%',
    fontFamily: 'PoppinsRegular',
    color: globalStyles.greenColor,
    fontSize: globalStyles.h18,
    textAlign: 'center',
    marginBottom: '2%',
  },
  aboutUsContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  aboutUsSubcontainer: {
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    objectFit: 'contain',
  },
  textStyle: {
    width: '80%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    marginBottom: '4%',
  },
  pStyle3: {
    fontFamily: 'PoppinsMedium',
    width: '80%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h16,
  },
  grayContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#efefef',
    position: 'absolute',
    marginTop: '8%',
    zIndex: -1,
  },
  swiperStyles: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  beforeAfterContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '15%',
  },
  beforeAfterSubcontainer: {
    width: '100%',
    height: '58%',
    backgroundColor: globalStyles.blackColor,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: -2,
  },
  beforeAfterImgS: {
    width: '40%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
  },
};

export default Footer;
