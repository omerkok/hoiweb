import React from 'react';
import { globalStyles } from '../../assets/Styles';
import CustomButton from '../CustomButton';
import ContactUsImg from '../../images/ContactUsImg.png';
import ContactUsBg from '../../images/ContactUsBg.png';
import './ContactUsForm.css';

const ContactUsForm = () => {
  return (
    <div style={styles.aboutUsContainer}>
      <div style={{ ...styles.aboutUsSubcontainer, alignItems: 'center' }}>
        <img
          src={ContactUsBg}
          style={{ ...styles.image, zIndex: -1, position: 'absolute' }}
          alt='Hoi'></img>
        <img src={ContactUsImg} style={styles.image} alt='Hoi'></img>
        <CustomButton
          width={'55%'}
          text={'CONTACT US'}
          backgroundColor={globalStyles.greenColor}
          textColor={globalStyles.whiteColor}
          borderRadius={20}
          fontSize={globalStyles.h36}
          onPress={() => {}}
        />
      </div>
      <div style={styles.aboutUsSubcontainer}>
        <span style={styles.textStyle}>{'FULL NAME *'}</span>
        <input className='ContactFormInput' style={styles.inputStyle} />
        <span style={styles.textStyle}>{'TELEPHONE NUMBER *'}</span>
        <input className='ContactFormInput' style={styles.inputStyle} />
        <span style={styles.textStyle}>{'E-MAIL *'}</span>
        <input className='ContactFormInput' style={styles.inputStyle} />
        <span style={styles.textStyle}>{'MESSAGE *'}</span>
        <textarea className='ContactFormInput' style={styles.textAreaStyle} />
      </div>
    </div>
  );
};

const styles = {
  aboutUsContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15%',
  },
  aboutUsSubcontainer: {
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  textStyle: {
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h18,
    marginBottom: '1%',
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
  inputStyle: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h18,
    color: globalStyles.greyColor57,
  },
  textAreaStyle: {
    height: 150,
    width: '100%',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h18,
    resize: 'none',
    color: globalStyles.greyColor57,
  },
};

export default ContactUsForm;
