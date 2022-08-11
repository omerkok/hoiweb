import React from 'react';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HoiMan from '../../images/HoiMan.svg';
import HoiIcon from '../../images/HoiIcon.svg';
import Build from '../../images/Build.png';
import ClinicRoom from '../../images/ClinicRoom.png';
import { globalStyles } from '../../assets/Styles';
import { display } from '@mui/system';

const AboutUsContent = () => {
  return (
    <div style={styles.container}>
      <span style={styles.titleStyle}>{'ABOUT US'}</span>
      <div style={styles.imageContainer}>
        <img
          src={HoiIcon}
          style={{ width: '15%', objectFit: 'contain', marginRight: '10%' }}
        />
        <img src={HoiMan} style={{ width: '15%', objectFit: 'contain' }} />
      </div>
      <div style={styles.container2}>
        <div style={styles.bgCont}></div>
        <div style={styles.bgCont2}></div>
        <div style={styles.leftContainer}>
          <div style={styles.rightContainer}>
            <span style={styles.textStyle}>{'HAIR OF ISTANBUL'}</span>
            <p style={styles.pText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br />
              <br />
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. aliqua.
            </p>
          </div>
          <img
            src={Build}
            style={{
              width: '60%',
              objectFit: 'contain',
              right: '3%',
            }}
          />
        </div>
      </div>
      <div style={styles.container3}>
        <img
          src={HoiMan}
          style={{
            width: '90%',
            objectFit: 'contain',
            position: 'absolute',
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <span style={styles.textStyle2}>{'MISION'}</span>
        <p style={styles.pText2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed d dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <span style={styles.textStyle2}>{'VISION'}</span>
        <p style={styles.pText2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed d dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <span style={styles.textStyle2}>{'WHO ARE WE'}</span>
        <p style={styles.pText2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed d dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
          accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div style={styles.container4}>
        <div style={styles.bgCont3}></div>
        <div style={styles.leftContainer2}>
          <div style={styles.rightContainer2}>
            <span style={styles.textStyle3}>{'HAIR OF ISTANBUL'}</span>
            <p style={styles.pText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br />
              <br />
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. aliqua.
            </p>
          </div>
          <img
            src={Build}
            style={{
              width: '60%',
              objectFit: 'contain',
              right: '3%',
            }}
          />
        </div>
        <div style={styles.container5}>
          <div style={styles.container6}>
            <img
              src={ClinicRoom}
              style={{
                width: '100%',
                objectFit: 'contain',
                marginBottom: '5%',
              }}
            />
            <span style={styles.textStyle4}>{'HAIR OF ISTANBUL'}</span>
            <Divider style={styles.dividerS} />
            <p style={styles.pText3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>
          <div style={styles.container6}>
            <img
              src={ClinicRoom}
              style={{
                width: '100%',
                objectFit: 'contain',
                marginBottom: '5%',
              }}
            />
            <span style={styles.textStyle4}>{'HAIR OF ISTANBUL'}</span>
            <Divider style={styles.dividerS} />
            <p style={styles.pText3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>
          <div style={styles.container6}>
            <img
              src={ClinicRoom}
              style={{
                width: '100%',
                objectFit: 'contain',
                marginBottom: '5%',
              }}
            />
            <span style={styles.textStyle4}>{'HAIR OF ISTANBUL'}</span>
            <Divider style={styles.dividerS} />
            <p style={styles.pText3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <Header />
      <AboutUsContent />
      <Footer />
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
  titleStyle: {
    width: '80%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    marginBottom: '1%',
    marginTop: '10%',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: ' flex-start',
  },
  pText: {
    fontFamily: 'PoppinsRegular',
    width: '95%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h16,
    textAlign: 'left',
  },
  dividerS: {
    backgroundColor: globalStyles.yellowColor,
    height: 1,
    marginBottom: '2.5%',
  },
  textStyle: {
    width: '95%',
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h32,
    color: globalStyles.greenColor,
    textAlign: 'center',
  },
  textStyle2: {
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h48,
    color: globalStyles.greenColor,
    textAlign: 'left',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
  },
  textStyle2: {
    width: '95%',
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h32,
    color: globalStyles.greenColor,
    textAlign: 'center',
  },
  pText2: {
    fontFamily: 'PoppinsRegular',
    width: '95%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h16,
    textAlign: 'left',
    marginBottom: '5%',
  },
  leftContainer2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: ' flex-start',
  },
  rightContainer2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
  },
  textStyle3: {
    width: '95%',
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h32,
    color: globalStyles.greenColor,
    textAlign: 'left',
  },
  textStyle4: {
    width: '95%',
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h32,
    color: globalStyles.greenColor,
    textAlign: 'center',
  },
  pText3: {
    fontFamily: 'PoppinsRegular',
    width: '95%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h16,
    textAlign: 'center',
    marginBottom: '5%',
  },
  dividerS: {
    backgroundColor: globalStyles.greenColor,
    width: '60%',
    height: 1,
    marginBottom: '5%',
  },
  imageContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7%',
  },
  container2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '7%',
  },
  bgCont: {
    width: '50%',
    height: '40%',
    left: 0,
    backgroundColor: globalStyles.whiteGreyColor,
    position: 'absolute',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: -1,
  },
  bgCont2: {
    width: '15%',
    height: 350,
    right: '15%',
    backgroundColor: globalStyles.blackColor,
    position: 'absolute',
    zIndex: -1,
    borderRadius: 25,
  },
  container3: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '7%',
  },
  container4: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '7%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgCont3: {
    width: '100%',
    height: '30%',
    left: 0,
    backgroundColor: globalStyles.whiteGreyColor,
    position: 'absolute',
    zIndex: -1,
  },
  container5: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '7%',
  },
  container6: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default AboutUs;
