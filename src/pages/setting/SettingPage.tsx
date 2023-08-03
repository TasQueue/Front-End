import React, { useState } from 'react';
import * as S from './SettingPage.styled';
import NameChangePopup from './NameChangePopup';

const SettingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <S.SettingPageContainer>
      <S.ChangeWrap>
        <div>닐리리맘보</div>
        <NameChangePopup isOpen={isOpen} setIsOpen={setIsOpen} name={name} setName={setName} />
      </S.ChangeWrap>
      <S.ChangeWrap>
        <div>상태메세지입니다.</div>
      </S.ChangeWrap>
      <S.ChangeWrap>
        <S.GrassChangeLabel>잔디 색</S.GrassChangeLabel>
      </S.ChangeWrap>
      <S.ChangeBtn onClick={() => setIsOpen(true)}>변경하기</S.ChangeBtn>
      <button type='submit'>로그아웃</button>
      <button type='submit'>계정삭제</button>
    </S.SettingPageContainer>
  );
};

export default SettingPage;
