import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';
import { useRecoilState } from 'recoil';
import { userThemeColorState } from '../../recoil/userInfoState';

const GrassColorButton = () => {
  const [themeColor, setThemeColor] = useRecoilState(userThemeColorState);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (pickedColor) => {
    setThemeColor(pickedColor.hex);
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (action === 'toggle') handleClick();
      else if (action === 'close') handleClose();
    }
  };

  const styles = reactCSS({
    default: {
      color: {
        width: '40px',
        height: '40px',
        borderRadius: '50px',
        background: themeColor,
      },
      swatch: {
        padding: '1px',
        background: '#fff',
        width: '36px',
        borderRadius: '50px',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
        left: '40.8vw',
        bottom: '9vh',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return (
    <div>
      <div
        style={styles.swatch}
        onClick={handleClick}
        onKeyPress={(e) => handleKeyPress(e, 'toggle')}
        tabIndex={0}
        role='button'
        aria-label='color swatch'
      >
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div
            style={styles.cover}
            onClick={handleClose}
            onKeyPress={(e) => handleKeyPress(e, 'close')}
            tabIndex={0}
            role='button'
            aria-label='color picker overlay'
          />
          <ChromePicker color={themeColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default GrassColorButton;
