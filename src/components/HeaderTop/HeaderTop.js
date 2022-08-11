import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import {
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { globalStyles } from '../../assets/Styles';
import logo from '../../images/HoiLogoTop.svg';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const HeaderTop = () => {
  const navigate = useNavigate();
  
  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <div style={styles.leftContainer}>
          <span style={styles.selectLang}>{'en'}</span>
        </div>
        <div style={styles.rightContainer}>
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
          <Divider style={styles.dividerConst} />
          <IconButton style={styles.iconButtonWp}>
            <WhatsappOutlined style={styles.iconWp} />
          </IconButton>
        </div>
      </div>
      <div style={styles.subContainer2}>
        <IconButton style={styles.logoStyle} onClick={() => navigate('/')}>
          <Link style={{ textDecoration: 'none' }}>
            <img src={logo} style={styles.logoStyle} alt='Hoi' />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: globalStyles.greenColor,
  },
  subContainer: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
  },
  subContainer2: {
    marginTop: '1%',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2%',
  },
  rightContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '6%',
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
    color: globalStyles.greenColor,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: width * 0.5,
    padding: 4,
    margin: 1,
  },
  iconButtonWp: {
    height: 37,
    width: 37,
  },
  dividerConst: {
    width: '80%',
    height: 2,
    backgroundColor: globalStyles.whiteColor,
    marginBottom: '6%',
  },
  selectLang: {
    color: globalStyles.whiteColor,
    fontFamily: 'PoppinsRegular',
    fontSize: globalStyles.h18,
  },
  logoStyle: {
    height: 163,
    width: 197,
  },
};

export default HeaderTop;
