import React from 'react';
import IconButton from '@mui/material/IconButton';
import Blog1 from '../../images/1.png';
import { globalStyles } from '../../assets/Styles';
import '../../assets/Styles/PStyles.css';

const BlogPost = () => {
  return (
    <div style={styles.container}>
      <span style={styles.blogTextStyle}>{'BLOG'}</span>
      <div style={styles.brownDiv}></div>
      <div style={styles.subContainer}>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.subContainer2}>
          <img src={Blog1} style={styles.image} alt='Hoi'></img>
          <div style={styles.subContainer3}>
            <span className='line3' style={styles.text}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </span>
            <div style={styles.subContainer4}>
              <div style={styles.subContainer5}>
                <span style={styles.date}>
                  {'09'}
                  <br />
                  {'MAY'}
                  <br />
                  {'22'}
                </span>
              </div>
              <div style={styles.subContainer6}>
                <span className='line2' style={styles.title}>
                  {'AFRO TYPE HAIR DRAW'}
                </span>
                <IconButton style={styles.button}>
                  <span className='line2' style={styles.readMore}>
                    {'READ MORE'}
                  </span>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
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
    justifyContent: 'center',
    marginBottom: '15%',
  },
  brownDiv: {
    width: '100%',
    height: '70%',
    backgroundColor: globalStyles.brownColor,
    position: 'absolute',
    zIndex: -1,
  },
  subContainer: {
    width: '80%',
    minHeight: 750,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  subContainer2: {
    width: '30%',
    height: 400,
    marginBottom: '5%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: '10%',
  },
  text: {
    width: '95%',
    zIndex: 3,
    fontFamily: 'PoppinsRegular',
    fontSize: globalStyles.h16,
    color: globalStyles.blackNewColor,
    marginBottom: '20%',
    textAlign: 'left',
  },
  date: {
    zIndex: 3,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h24,
    borderRightStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.4)',
    paddingRight: 9,
    color: globalStyles.blackNewColor,
  },
  title: {
    width: '100%',
    zIndex: 3,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h24,
    color: globalStyles.blackNewColor,
  },
  button: {
    width: '100%',
    zIndex: 3,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h16,
  },
  readMore: {
    width: '100%',
    zIndex: 3,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h16,
    color: globalStyles.blackNewColor,
  },
  subContainer3: {
    width: '95%',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 8,
    left: '12%',
  },
  subContainer4: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  subContainer5: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer6: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20%',
    justifyContent: 'flex-end',
  },
  blogTextStyle: {
    width: '80%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h48,
    marginBottom: globalStyles.m5,
  },
};

export default BlogPost;
