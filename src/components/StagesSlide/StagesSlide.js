import React from 'react';
import Divider from '@mui/material/Divider';
import CustomButton from '../CustomButton';
import Asset from '../../images/Asset.png';
import { globalStyles } from '../../assets/Styles';
import '../../assets/Styles/PStyles.css';

const StagesSlide = () => {
  return (
    <div style={styles.container}>
      <div style={styles.rightContainer}>
        <img
          src={Asset}
          style={{ width: '70%', height: '100%', objectFit: 'contain' }}
        />
        <span style={styles.textStyle}>
          {'TRANSFER'}
          <Divider style={styles.dividerS} />
        </span>
        <Divider style={styles.dividerS} />
        <p className='line5' style={styles.pText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod
        </p>
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

  pText: {
    fontFamily: 'PoppinsRegular',
    width: '70%',
    color: globalStyles.greyColor57,
    fontSize: globalStyles.h14,
  },
  dividerS: {
    backgroundColor: globalStyles.yellowColor,
    height: 1,
    marginTop: '2%',
  },
  textStyle: {
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h24,
    color: globalStyles.greenColor,
    textAlign: 'right',
    marginTop: '2.5%',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
};

export default StagesSlide;
