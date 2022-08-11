import React from 'react';
import {
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactUsForm from '../../components/ContactUsForm';
import brazil from '../../images/brazil.svg';
import france from '../../images/france.svg';
import germany from '../../images/germany.svg';
import russia from '../../images/russia.svg';
import spain from '../../images/spain.svg';
import turkey from '../../images/turkey.svg';
import unitedKingdom from '../../images/united-kingdom.svg';
import unitedStates from '../../images/united-states.svg';
import { globalStyles } from '../../assets/Styles';

var width = document.documentElement.clientWidth;

const ContactUsContent = () => {
  return (
    <div style={styles.container2}>
      <ContactUsForm />
      <div style={styles.container3}>
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
      <IconButton style={styles.iconButtonWp}>
        <WhatsappOutlined style={styles.iconWp} />
      </IconButton>
      <div style={styles.container4}>
        <div style={styles.blog}>
          <div style={styles.iconButton1}>
            <img src={unitedKingdom} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={unitedStates} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={germany} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={spain} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
        </div>
        <div style={styles.blog}>
          <div style={styles.iconButton1}>
            <img src={russia} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={france} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={brazil} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
          <div style={styles.iconButton1}>
            <img src={turkey} style={styles.image} />
            <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
          </div>
        </div>
      </div>
      <div
        style={{
          ...styles.blog2,
          justifyContent: 'space-between',
        }}>
        <div style={styles.iconButton2}>
          <Instagram style={styles.icon2} />
          <span style={styles.numberText2}>{'hairofistanbul'}</span>
        </div>
        <div style={styles.iconButton2}>
          <FacebookOutlined style={styles.icon2} />
          <span style={styles.numberText2}>{'hairofistanbul'}</span>
        </div>
        <div style={styles.iconButton2}>
          <Twitter style={styles.icon2} />
          <span style={styles.numberText2}>{'hairofistanbul'}</span>
        </div>
        <div style={styles.iconButton2}>
          <YouTube style={styles.icon2} />
          <span style={styles.numberText2}>{'hairofistanbul'}</span>
        </div>
        <div style={styles.iconButton2}>
          <LinkedIn style={styles.icon2} />
          <span style={styles.numberText2}>{'hairofistanbul'}</span>
        </div>
      </div>
      <div style={styles.container5}>
        <span style={styles.textContact}>
          <b>{'Adress:'}</b>
          {
            ' incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
          }
        </span>
        <span style={styles.textContact}>
          <b>{'E-mail:'}</b>
          {'  info@hairofistanbul.com'}
        </span>
        <span style={styles.textContact}>
          <b>{'Telephone:'}</b>
          {' +90(212) xxx xx xx'}
        </span>
        <span style={styles.textContact}>
          <b>{'Fax:'}</b>
          {' +90(212) xxx xx xx'}
        </span>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <Header />
      <ContactUsContent />
      <Footer contact={false} />
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
  container2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '7%',
    marginBottom: '10%',
  },
  icon: {
    height: 25,
    width: 25,
    color: globalStyles.greenColor,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: width * 0.5,
    padding: 4,
    margin: 1,
  },
  iconButton: {
    height: 25,
    width: 25,
  },
  iconWp: {
    height: 37,
    width: 37,
    color: globalStyles.whiteColor,
    backgroundColor: globalStyles.greenColor,
    borderRadius: width * 0.5,
    padding: 4,
  },
  iconButtonWp: {
    height: 37,
    width: 37,
    marginBottom: '1.5%',
  },
  blog: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconButton1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  image: {
    width: globalStyles.flagSize,
    height: globalStyles.flagSize,
    marginRight: 5,
  },
  numberText2: {
    width: '98%',
    color: globalStyles.blackColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h16,
  },
  blog2: {
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: '2.5%',
    paddingLeft: '2.5%',
    marginBottom: '5%',
  },
  icon2: {
    height: 25,
    width: 25,
    color: globalStyles.whiteColor,
    backgroundColor: globalStyles.greenColor,
    borderRadius: width * 0.5,
    padding: 4,
    margin: 1,
  },
  iconButton2: {
    width: '31%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContact: {
    width: '100%',
    fontFamily: 'PoppinsMedium',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h16,
    marginBottom: '2.5%',
  },
  container3: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: globalStyles.greenColor,
    borderRadius: 25,
    marginTop: '2.5%',
    marginBottom: '5%',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  container4: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: '2.5%',
    marginBottom: '7%',
  },
  container5: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default ContactUs;
