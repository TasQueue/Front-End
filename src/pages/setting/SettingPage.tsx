import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { catState } from '../../recoil/catState';
import { userNameState, userStatusState } from '../../recoil/userInfoState';
import * as S from './SettingPage.styled';

const SettingPage = () => {
  const [currentCat, setCurrentCat] = useRecoilState(catState);
  const [name, setName] = useRecoilState(userNameState);
  const [currentName, setCurrentName] = useState('');
  const [status, setStatus] = useRecoilState(userStatusState);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setCurrentName(name);
  };

  return (
    <S.SettingPageContainer>
      <S.ChangeWhiteBox>
        <S.ProfileImg src={currentCat} alt='profile' />
        <S.ChangeWrap>
          <h1>{currentName}</h1>
          <S.NameChange type='text' value={name} onChange={handleChange} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.StatusChange value={status} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.GrassChangeLabel>잔디 색</S.GrassChangeLabel>
          <div>color library</div>
        </S.ChangeWrap>
        <S.ChangeBtn onClick={handleClick}> 변경하기</S.ChangeBtn>
      </S.ChangeWhiteBox>
      <S.TwoButtonWrap>
        <S.LogoutBtn type='submit'>로그아웃</S.LogoutBtn>
        <S.DeleteBtn type='submit'>계정삭제</S.DeleteBtn>
      </S.TwoButtonWrap>
    </S.SettingPageContainer>
  );
};

export default SettingPage;
