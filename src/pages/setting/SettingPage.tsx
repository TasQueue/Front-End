import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { catState } from '../../recoil/catState';
import { userNameState, userStatusState } from '../../recoil/userInfoState';
import * as S from './SettingPage.styled';

const SettingPage = () => {
  const [currentCat, setCurrentCat] = useRecoilState(catState);
  const [name, setName] = useRecoilState(userNameState);
  const [currentName, setCurrentName] = useState('');
  const [status, setStatus] = useRecoilState(userStatusState);
  const [currentStatus, setCurrentStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [initialNameValue, setInitialNameValue] = useState(name);
  const [initialStatusValue, setInitialStatusValue] = useState(status);
  const [modalMessage, setModalMessage] = useState('');

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

  return (
    <S.SettingPageContainer>
      <S.ChangeWhiteBox>
        <S.ProfileImg src={currentCat} alt='profile' />
        <S.ChangeWrap>
          <S.NameChange type='text' value={name} onChange={handleNameChange} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.StatusChange value={status} onChange={handleStatusChange} />
        </S.ChangeWrap>
        <S.ChangeWrap>
          <S.GrassChangeLabel>잔디 색</S.GrassChangeLabel>
          <div>color library</div>
        </S.ChangeWrap>
        <S.ChangeBtn onClick={handleClick}> 변경하기</S.ChangeBtn>
        {/* showModal이 true일 때만 모달 메세지 표시함 */}
        {showModal && <S.Modal>{modalMessage}</S.Modal>}
      </S.ChangeWhiteBox>
      <S.TwoButtonWrap>
        <S.LogoutBtn type='submit'>로그아웃</S.LogoutBtn>
        <S.DeleteBtn type='submit'>계정삭제</S.DeleteBtn>
      </S.TwoButtonWrap>
    </S.SettingPageContainer>
  );
};

export default SettingPage;
