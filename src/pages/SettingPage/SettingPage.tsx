import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userNameState, userStatusState } from '../../recoil/userInfoState';
import GrassColorButton from './GrassColorButton';
import LogoutButton from './LogoutButton';
import AccountDeleteButton from './AccountDeleteButton';
import * as S from './SettingPage.styled';
import { useUserQuery } from '../../hooks/queries/useUserQuery';
import { useUpdateUser } from '../../hooks/queries/useUpdateUser';

const SettingPage = () => {
  const { user, isLoading } = useUserQuery();
  const mutation = useUpdateUser();

  const handleSaveChangesClick = () => {
    if (name !== user?.name || status !== user?.intro) {
      // 변경사항이 있다면, mutation 실행
      mutation.mutate({
        color: 'ABC123', // 테마 색상 선택 연결 필요
        intro: status,
        name,
      });

      setShowModal(true);
      setModalMessage('변경사항이 저장되었습니다.');
    } else {
      setShowModal(true);
      setModalMessage('변경사항이 없습니다.');
    }
  };

  const [currentName, setCurrentName] = useRecoilState(userNameState);
  const [name, setName] = useState(currentName);

  const [currentStatus, setCurrentStatus] = useRecoilState(userStatusState);
  const [status, setStatus] = useState(currentStatus);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setStatus(user.intro);
    }
  }, [user]);

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => setShowModal(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

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
        <S.ChangeBtn onClick={handleSaveChangesClick}> 변경하기</S.ChangeBtn>
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
