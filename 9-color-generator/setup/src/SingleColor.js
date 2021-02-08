import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(hexColor);
  const [isAlert, setIsAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isAlert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setIsAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {/* <p className="color-value">{hex}</p> */}
      {isAlert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
