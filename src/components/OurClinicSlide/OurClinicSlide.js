import React from 'react';
import Divider from '@mui/material/Divider';
import CustomButton from '../CustomButton';
import Asset from '../../images/Asset.png';
import { globalStyles } from '../../assets/Styles';
import '../../assets/Styles/PStyles.css';

const OurClinicSlide = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <p className='line5' style={styles.pText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod
        </p>
        <span style={styles.textStyle}>{'HAIR TRANSPLANT'}</span>
        <Divider style={styles.dividerS} />
        <CustomButton
          width={'40%'}
          text={'DISCOVER'}
          backgroundColor={globalStyles.greenColor}
          textColor={globalStyles.white}
          borderRadius={20}
          fontSize={globalStyles.h16}
          onPress={() => {}}
        />
      </div>
      <div style={styles.rightContainer}>
        <img src={Asset} style={{ width: '100%', height:'100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4%',
    paddingBottom: '4%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: globalStyles.whiteGreyColor,
  },
  pText: {
    fontFamily: 'PoppinsRegular',
    width: '80%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h14,
  },
  dividerS: {
    backgroundColor: globalStyles.yellowColor,
    width: '25%',
    height: 1,
    marginBottom: '2.5%',
  },
  textStyle: {
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h24,
    color: globalStyles.greenColor,
    textAlign: 'right',
    marginBottom: '5%',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: '-2.5%',
  },
};

export default OurClinicSlide;
