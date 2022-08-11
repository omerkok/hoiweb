import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DhiFue from '../../images/DhiFue.png';
import DhiFue2 from '../../images/DhiFue2.png';
import { globalStyles } from '../../assets/Styles';

const FueAndDhiContent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '10%',
      }}>
      <div style={styles.subContainer}>
        <span style={styles.textStyle}>{'FUE & DHI'}</span>
        <p style={styles.pText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
        <p style={styles.pText2}>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed d dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div style={styles.bgContainer}>{''}</div>
        <span style={styles.textStyle2}>{'FUE'}</span>
        <img
          src={DhiFue}
          style={{
            width: '60%',
            objectFit: 'contain',
            right: '3%',
            marginBottom: '5%',
          }}
        />
        <p style={styles.pText2}>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed d dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div style={styles.subContainer}>
        <div style={styles.bgContainer}>{''}</div>
        <span style={styles.textStyle2}>{'DHI'}</span>
        <img
          src={DhiFue2}
          style={{
            width: '60%',
            objectFit: 'contain',
            right: '3%',
            marginBottom: '5%',
          }}
        />
        <p style={styles.pText2}>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed d dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div style={styles.subContainer}>
        <span style={styles.textStyle}>{'FUE - DHI DIFFERENT'}</span>
        <p style={styles.pText2}>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed d dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <p style={styles.pText2}>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed d dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </div>
  );
};

const FueAndDhi = () => {
  return (
    <div style={styles.container}>
      <Header />
      <FueAndDhiContent />
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
  textStyle: {
    width: '95%',
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    color: globalStyles.greenColor,
    textAlign: 'center',
  },
  textStyle2: {
    width: '95%',
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    color: globalStyles.greenColor,
    textAlign: 'center',
    marginBottom: '5%',
  },
  pText: {
    fontFamily: 'PoppinsMedium',
    width: '95%',
    color: globalStyles.blackDarkColor,
    fontSize: globalStyles.h18,
    textAlign: 'center',
  },
  pText2: {
    fontFamily: 'PoppinsRegular',
    width: '95%',
    color: globalStyles.blackDarkColor,
    fontSize: globalStyles.h16,
    textAlign: 'center',
    marginBottom: '5%',
  },
  bgContainer: {
    width: '100%',
    height: 350,
    backgroundColor: globalStyles.whiteGreyColor,
    position: 'absolute',
    zIndex: -1,
  },
  subContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default FueAndDhi;
