import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNameState, userStatusState } from '../../recoil/userInfoState';
import GrassColorButton from './GrassColorButton';
import LogoutButton from './LogoutButton';
import AccountDeleteButton from './AccountDeleteButton';
import * as S from './SettingPage.styled';
import { useUserQuery } from '../../hooks/queries/useUserQuery';

const SettingPage = () => {
  const { user, isLoading } = useUserQuery();

  const [currentName, setCurrentName] = useRecoilState(userNameState);
  const [name, setName] = useState(currentName);

  const [currentStatus, setCurrentStatus] = useRecoilState(userStatusState);
  const [status, setStatus] = useState(currentStatus);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [initialNameValue, setInitialNameValue] = useState(name);
  const [initialStatusValue, setInitialStatusValue] = useState(status);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameClick = () => {
    setCurrentName(name);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStatusClick = () => {
    setCurrentStatus(status);
  };

  const handleClick = () => {
    if (initialNameValue !== name || initialStatusValue !== status) {
      handleNameClick();
      handleStatusClick();
      setShowModal(true);
      setModalMessage('변경사항이 저장되었습니다.');
      setInitialNameValue(name);
      setInitialStatusValue(status);
    } else {
      setShowModal(true);
      setModalMessage('변경사항이 없습니다.');
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setStatus(user.intro);
    }
  }, [user]);

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.SettingPageContainer>
      <S.ChangeWhiteBox>
        <S.ProfileImg src={`/assets/images/Cat/${user?.catState}.svg`} alt='profile' />
        <S.ChangeWrap>
          <S.NameChange type='text' value={name} onChange={handleNameChange} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.StatusChange value={status} onChange={handleStatusChange} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.GrassChangeLabel>잔디색</S.GrassChangeLabel>
          <GrassColorButton />
        </S.ChangeWrap>
        <S.ChangeBtn onClick={handleClick}> 변경하기</S.ChangeBtn>
        {showModal && <S.Modal>{modalMessage}</S.Modal>}
      </S.ChangeWhiteBox>

      <S.TwoButtonWrap>
        <LogoutButton />
        <AccountDeleteButton />
      </S.TwoButtonWrap>
    </S.SettingPageContainer>
  );
};

export default SettingPage;
