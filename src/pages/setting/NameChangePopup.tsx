import React, { useState } from 'react';
import * as S from './NameChangePopup.styled';

const NameChangePopup = ({ isOpen, setIsOpen, name, setName }) => {
  const [newName, setNewName] = useState(name);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
      <S.NameChangePopupBtn
        onClick={() => {
          setName(newName);
          setIsOpen(false);
        }}
      >
        확인
      </S.NameChangePopupBtn>
    </div>
  );
};

export default NameChangePopup;
