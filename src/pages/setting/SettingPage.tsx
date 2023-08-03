import React, { useState } from 'react';
import * as S from './SettingPage.styled';
import NameChangePopup from './NameChangePopup';

const SettingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  return (
    <S.SettingPageContainer>
      <S.ChangeWhiteBox>
        <S.ProfileImg src='/assets/images/Cat/badCat.svg' alt='profile' />
        <S.ChangeWrap>
          <S.NameChange type='text' value={name} />
          <NameChangePopup isOpen={isOpen} setIsOpen={setIsOpen} name={name} setName={setName} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.StatusChange value={name} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.GrassChangeLabel>잔디 색</S.GrassChangeLabel>
          <div>color library</div>
        </S.ChangeWrap>
        <S.ChangeBtn onClick={() => setIsOpen(true)}>변경하기</S.ChangeBtn>
      </S.ChangeWhiteBox>
      <S.TwoButtonWrap>
        <S.LogoutBtn type='submit'>로그아웃</S.LogoutBtn>
        <S.DeleteBtn type='submit'>계정삭제</S.DeleteBtn>
      </S.TwoButtonWrap>
    </S.SettingPageContainer>
  );
};

export default SettingPage;
