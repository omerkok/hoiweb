import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AfroType from '../../images/AfroType.svg';
import BeardTransplant from '../../images/BeardTransplant.svg';
import HairTransplant from '../../images/HairTransplant.svg';
import BgMobile2 from '../../images/BgMobile2.svg';
import BeforeAfter1 from '../../images/BeforeAfter1.png';
import BeforeAfter2 from '../../images/BeforeAfter2.png';
import BeforeAfter3 from '../../images/BeforeAfter3.png';
import BeforeAfter4 from '../../images/BeforeAfter4.png';
import '../../assets/Styles/PStyles.css';

import { globalStyles } from '../../assets/Styles';

var typeList = [
  {
    url: HairTransplant,
    Selected: true,
    Name: 'HAIR',
  },
  {
    url: AfroType,
    Selected: false,
    Name: 'AFRO-TYPE',
  },
  {
    url: BeardTransplant,
    Selected: false,
    Name: 'BEARD',
  },
];

const BeforeAfter = () => {
  const [typeListState, setTypeListState] = useState(typeList);
  const changeSelected = (n) => {
    var temp = JSON.parse(JSON.stringify(typeListState));
    temp.map((n, i) => {
      n.Selected = false;
    });
    temp.find((x) => x.url === n.url).Selected = true;
    setTypeListState(temp);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.container2}>
        <div style={styles.container3}>
          <div style={styles.container4}>
            {typeListState.map((n, i) => {
              return (
                <IconButton
                  key={i}
                  style={styles.typeIconButton}
                  onClick={() => changeSelected(n)}>
                  <img
                    src={n.url}
                    style={{
                      ...styles.typeImg,
                      width: n.Selected == true ? 100 : 75,
                      opacity: n.Selected == true ? 1 : 0.5,
                    }}
                    alt='Hoi'
                  />
                </IconButton>
              );
            })}
          </div>
          <Divider style={styles.dividerS} />
          <div style={styles.container5}>
            {typeListState.map((n, i) => {
              return (
                <IconButton
                  key={i}
                  style={styles.typeIconButton}
                  onClick={() => changeSelected(n)}>
                  <span
                    className='line1'
                    style={{
                      paddingTop: '5%',
                      paddingBottom: '5%',
                      paddingLeft: '10%',
                      paddingRight: '10%',
                      borderBottomLeftRadius: 25,
                      borderBottomRightRadius: 25,
                      fontSize:
                        n.Selected == true
                          ? globalStyles.h20
                          : globalStyles.h18,
                      fontFamily: 'PlayfairDisplayBold',
                      color:
                        n.Selected == true
                          ? globalStyles.whiteColor
                          : globalStyles.greyColor,
                      backgroundColor:
                        n.Selected == true
                          ? globalStyles.greenColor
                          : 'transparent',
                    }}>
                    {n.Name}
                  </span>
                </IconButton>
              );
            })}
          </div>
          <div style={styles.container6}>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
          </div>
          <div style={styles.container6}>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
            <div style={styles.container7}>
              <img src={BeforeAfter1} style={styles.imgStyle} alt='Hoi' />
              <span style={styles.imgTitle}>
                {'AHMET'}
                <Divider style={styles.divider2} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer beforeAfter={false} linkExtra={true} />
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
  typeIconButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24%',
  },
  typeImg: {
    marginBottom: '1%',
    objectFit: 'contain',
  },
  dividerS: {
    backgroundColor: globalStyles.greenColor,
    width: '100%',
    height: 1,
    marginBottom: -8,
  },
  divider2: {
    backgroundColor: globalStyles.greenColor,
    height: 1,
    marginBottom: -8,
  },
  container2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: globalStyles.whiteGreyColor,
    marginTop: '7%',
    marginBottom: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  container3: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container4: {
    width: '90%',
    minHeight: 160,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  container5: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: 0,
  },
  container6: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  container7: {
    width: '18%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5%',
  },
  imgTitle: {
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h18,
    color: globalStyles.greenColor,
  },
  imgStyle: {
    width: '100%',
    objectFit: 'contain',
    marginBottom: '4%',
  },
  backgroundImage1: {
    opacity: 0.2,
    width: '100%',
    height: '500%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -10,
  },
};

export default BeforeAfter;
