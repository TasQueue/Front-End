import React, { useState } from 'react';
import * as L from './LogoutButton.styled';
import * as S from './SettingPage.styled';

const LogoutButton = () => {
  // 모달창 표시 여부를 관리하는 state 변수
  const [showModal, setShowModal] = useState(false);

  // 모달창을 보여줄지 말지를 반환하는 함수
  const shouldShowModal = () => showModal;

  // 로그아웃 버튼 클릭 시 실행되는 함수
  const handleLogout = (event) => {
    event.preventDefault();
    if (shouldShowModal()) {
      // 모달창이 표시된 상태에서 로그아웃 버튼 클릭 시 로그아웃 처리
      // 랜딩페이지...

      // 모달창 닫기
      setShowModal(false);
    } else {
      // 모달창이 표시되지 않은 상태에서 로그아웃 버튼 클릭 시 모달창 표시
      setShowModal(true);
    }
  };

  return (
    <div>
      <S.LogoutBtn type='submit' onClick={handleLogout}>
        로그아웃
      </S.LogoutBtn>
      <L.Modal show={shouldShowModal()}>
        <L.ModalContent>
          <p>로그아웃하시겠습니까?</p>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0 0 0' }}>
            <L.NoBtn onClick={() => setShowModal(false)}>취소하기</L.NoBtn>
            <L.YesBtn
              onClick={() => {
                // 모달창에서 로그아웃 버튼 클릭 시 로그아웃 처리
                // ...

                // 모달창 닫기
                setShowModal(false);
              }}
            >
              로그아웃
            </L.YesBtn>
          </div>
        </L.ModalContent>
      </L.Modal>
    </div>
  );
};

export default LogoutButton;
