import React from 'react';
import Divider from '@mui/material/Divider';
import CustomButton from '../CustomButton';
import Katman1 from '../../images/Katman1.png';
import { globalStyles } from '../../assets/Styles';
import '../../assets/Styles/PStyles.css';

const HairTypeHeader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <div style={styles.rightContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <span style={styles.textStyle}>{'AFRO'}</span>
            <span style={styles.textStyle2}>
              {'TYPE'}
              <Divider style={styles.dividerS} />
            </span>
          </div>

          <p className='line5' style={styles.pText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commod
          </p>

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
        <img
          src={Katman1}
          style={{
            height: '115%',
            objectFit: 'contain',
            position: 'absolute',
            right: '3%',
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: globalStyles.whiteGreyColor,
    borderRadius: 25,
    position: 'relative',
    paddingLeft: '10%',
    paddingTop: '4%',
    paddingBottom: '5%',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  pText: {
    fontFamily: 'PoppinsRegular',
    width: '100%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h14,
  },
  dividerS: {
    backgroundColor: globalStyles.yellowColor,
    height: 1,
    marginBottom: '2.5%',
  },
  textStyle: {
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h80,
    color: globalStyles.greenColor,
    textAlign: 'left',
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
    width: '65%',
  },
};

export default HairTypeHeader;
