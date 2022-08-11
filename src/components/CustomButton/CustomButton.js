import React from 'react';
import Button from '@mui/material/Button';
import './CustomButton.css';

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  textColor,
  backgroundColor,
  fontSize,
  fontFamily,
  borderRadius,
}) => {
  return (
    <Button
      variant='contained'
      className='WideButtonContainer'
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
      }}
      onClick={onPress}>
      <span
        style={{
          fontFamily: fontFamily,
          color: textColor,
          fontSize: fontSize,
        }}>
        {text}
      </span>
    </Button>
  );
};

export default CustomButton;
