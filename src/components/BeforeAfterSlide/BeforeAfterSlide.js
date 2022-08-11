import React from 'react';
import Divider from '@mui/material/Divider';
import CustomButton from '../CustomButton';
import BeforeAfterImg from '../../images/BeforeAfterImg.png';
import { globalStyles } from '../../assets/Styles';

const BeforeAfterSlide = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <span
          style={{
            fontFamily: 'PlayfairDisplayMedium',
            fontSize: globalStyles.h100,
            color: globalStyles.brownTextColor,
            textAlign: 'right',
          }}>
          {'BEFORE'}
        </span>
        <span
          style={{
            fontFamily: 'PlayfairDisplayMedium',
            fontSize: globalStyles.h100,
            color: globalStyles.whiteColor,
            textAlign: 'right',
            marginBottom: '2.5%',
          }}>
          {'AFTER'}
        </span>
        <Divider
          style={{
            backgroundColor: globalStyles.yellowColor,
            width: '25%',
            height: 1,
            marginBottom: '2.5%',
          }}
        />
        <span
          style={{
            fontFamily: 'PoppinsMedium',
            fontSize: globalStyles.h36,
            color: globalStyles.whiteColor,
            textAlign: 'right',
            marginBottom: '5%',
          }}>
          {'HAIR TRANSPLANT'}
        </span>
        <CustomButton
          width={'40%'}
          text={'DISCOVER'}
          backgroundColor={globalStyles.whiteColor}
          textColor={globalStyles.blackColor}
          borderRadius={20}
          fontSize={globalStyles.h18}
          onPress={() => {}}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        }}>
        <img
          src={BeforeAfterImg}
          style={{ width: '100%', objectFit: 'contain' }}
          alt='Hoi'
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlide;
