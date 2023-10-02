import React, { useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import { ChromePicker } from 'react-color';
import { useRecoilState } from 'recoil';
import { userThemeColorState } from '../../recoil/userInfoState';
import { useUserQuery } from '../../hooks/queries/useUserQuery';

const GrassColorButton = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [userThemeColor, setUserThemeColor] = useRecoilState(userThemeColorState);

  const { user } = useUserQuery();

  useEffect(() => {
    if (user) {
      setUserThemeColor(user.themeColor);
    }
  }, [user, setUserThemeColor]);

  const toggleDisplayOfPicker = () => setDisplayColorPicker((prev) => !prev);

  const closeDisplayOfPicker = () => setDisplayColorPicker(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleDisplayOfPicker();
    }
  };

  const handleChangeComplete = ({ hex }) => setUserThemeColor(hex);

  const styles = reactCSS({
    default: {
      color: {
        width: '40px',
        height: '40px',
        borderRadius: '50px',
        background: userThemeColor,
      },
      swatch: {
        padding: '1px',
        background: '#fff',
        width: '36px',
        borderRadius: '50px',
        display: 'inline-block',
        cursor: 'pointer',
        margin: '0 0 1vw',
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
        onClick={toggleDisplayOfPicker}
        onKeyPress={handleKeyPress}
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
            onClick={closeDisplayOfPicker}
            onKeyPress={(e) => handleKeyPress(e)}
            tabIndex={0}
            role='button'
            aria-label='color picker overlay'
          />
          <ChromePicker color={userThemeColor} onChangeComplete={handleChangeComplete} />
        </div>
      ) : null}
    </div>
  );
};

export default GrassColorButton;
