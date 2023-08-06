// import React, { useState } from 'react';
// import { ChromePicker } from 'react-color';

// const GrassColorButton = () => {
//   const [color, setColor] = useState('#000');

//   const handleChangeComplete = (color) => {
//     setColor(color.hex);

//     // document.body.style.backgroundColor = color.hex;
//   };

//   return <ChromePicker color={color} onChangeComplete={handleChangeComplete} />;
// };

// export default GrassColorButton;

import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

const GrassColorButton = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (pickedColor) => {
    setColor(pickedColor.rgb);
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
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
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
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default GrassColorButton;
