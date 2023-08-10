import React, { useState } from 'react';
import * as A from './AccountDeleteButton.styled';

const AccountDeleteButton = () => {
  // 모달창 표시 여부를 관리하는 state 변수
  const [showModal, setShowModal] = useState(false);

  // 모달창을 보여줄지 말지를 반환하는 함수
  const shouldShowModal = () => showModal;

  // 계정삭제 버튼 클릭 시 실행되는 함수
  const handleDelete = (event) => {
    event.preventDefault();
    if (shouldShowModal()) {
      // 모달창이 표시된 상태에서 계정삭제 버튼 클릭 시 계정삭제 처리
      // 랜딩페이지...

      // 모달창 닫기
      setShowModal(false);
    } else {
      // 모달창이 표시되지 않은 상태에서 계정삭제 버튼 클릭 시 모달창 표시
      setShowModal(true);
    }
  };

  return (
    <div>
      <A.DeleteBtn type='submit' onClick={handleDelete}>
        계정삭제
      </A.DeleteBtn>
      <A.Modal show={shouldShowModal()}>
        <A.ModalContent>
          <p>계정을 삭제하시겠습니까?</p>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0 0 0' }}>
            <A.NoBtn onClick={() => setShowModal(false)}>취소하기</A.NoBtn>
            <A.YesBtn
              onClick={() => {
                // 모달창에서 계정 삭제 버튼 클릭 시 계정삭제 처리
                // ...

                // 모달창 닫기
                setShowModal(false);
              }}
            >
              삭제하기
            </A.YesBtn>
          </div>
        </A.ModalContent>
      </A.Modal>
    </div>
  );
};

export default AccountDeleteButton;
