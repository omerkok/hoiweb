import React, { useState } from 'react';
import { globalStyles } from '../../assets/Styles';
import './HeaderBottom.css';

/*
<nav>
<ul>
  <li>
    <a href={'/'}>HOME</a>
  </li>
  <li>
    <a href='#'>TRANSPLANT</a>
    <ul>
      <li>
        <a href='#'>single</a>
        <ul>
          <li>
            <a href='#'>bewid</a>
          </li>
          <li>
            <a href='#'>bezav</a>
          </li>
          <li>
            <a href='#'>bejab</a>
          </li>
        </ul>
      </li>
      <li>
        <a href='#'>composite</a>
        <ul>
          <li>
            <a href='#'>belradcomp</a>
          </li>
          <li>
            <a href='#'>beborder00</a>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a href='/ourclinic'>OUR CLINIC</a>
  </li>
  <li>
    <a href='/beforeafter'>BEFORE AFTER</a>
  </li>
  <li>
    <a href='/blog'>BLOG</a>
  </li>
  <li>
    <a href='/aboutus'>ABOUT US</a>
  </li>
  <li>
    <a href='contactus'>CONTACT US</a>
  </li>
</ul>
</nav>
*/

const HeaderBottom = () => {
  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <nav>
          <ul>
            <li>
              <a href={'/'}>HOME</a>
            </li>
            <li>
              <a href='#'>TRANSPLANT</a>
              <ul>
                <li>
                  <a href='/beardtransplant'>HAIR TRANSPLANT</a>
                </li>
                <li>
                  <a href='/beardtransplant'>BEARD TRANSPLANT</a>
                </li>
                <li>
                  <a href='/beardtransplant'>AFRO-TYPE</a>
                </li>
                <li>
                  <a href='/beardtransplant'>WOMAN TRANSPLANT</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/dhiandfue'>FUE AND DHI</a>
            </li>
            <li>
              <a href='/ourclinic'>OUR CLINIC</a>
            </li>
            <li>
              <a href='/beforeafter'>BEFORE AFTER</a>
            </li>
            <li>
              <a href='/blog'>BLOG</a>
            </li>
            <li>
              <a href='/aboutus'>ABOUT US</a>
            </li>
            <li>
              <a href='contactus'>CONTACT US</a>
            </li>
          </ul>
        </nav>
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
    justifyContent: 'center',
  },
};

export default HeaderBottom;
