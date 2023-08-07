import styled from 'styled-components';

// 팝업박스 스타일 컴포넌트
export const ModalContent = styled.div`
  width: 35vw;
  height: 40vh;
  background-color: #fff;
  border-radius: 24px;
  text-align: center;
  padding: 12rem 0 0 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const NoBtn = styled.button`
  background-color: #0066ff;
  color: #fff;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 0 1vw 0 0;

  &:hover {
    background-color: #033681;
    color: #fff;
  }
`;
export const YesBtn = styled.button`
  background-color: #ff5050;
  color: #fff;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  &:hover {
    background-color: #922d2d;
    color: #fff;
  }
`;

// 삭제하기 버튼 스타일 컴포넌트
export const DeleteBtn = styled.button`
  background-color: #ff5050;
  color: #ffffff;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  &:hover {
    background-color: #922d2d;
    color: #fff;
  }
`;
interface ModalProps {
  show: boolean;
}

// 모달창 스타일 컴포넌트
export const Modal = styled.div<ModalProps>`
  align-items: center;
  background-color: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(5px); /* 배경 블러 반경 설정 */
  bottom: 0;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;
