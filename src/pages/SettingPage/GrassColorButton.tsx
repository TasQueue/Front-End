import React, { useState } from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';
import { useRecoilState } from 'recoil';
import { userThemeColorState } from '../../recoil/userInfoState';
import { useUserQuery } from '../../hooks/queries/useUserQuery';

const GrassColorButton = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const { user } = useUserQuery();

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  // 선택한 color로 테마 색을 수정(put)하는 코드 작성 필요 (api 호출)
  // 지금은 console.log로만 찍음.
  const handleChange = (pickedColor) => {
    console.log(pickedColor.hex);
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
        background: user?.themeColor,
      },
      swatch: {
        padding: '1px',
        background: '#fff',
        width: '<36px></36px>',
        borderRadius: '50px',
        display: 'inline-block',
        cursor: 'pointer',
        margin: '0 <0></0> <1vw></1vw>',
      },
      popover: {
        position: 'absolute' as const,
        zIndex: '2',
        left: '40.8vw',
        bottom: '9vh',
      },
      cover: {
        position: 'fixed' as const,
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
          <ChromePicker color={user?.themeColor} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default GrassColorButton;
