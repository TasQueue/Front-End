import styled from 'styled-components';

export const CategoryModalBox = styled.div`
  width: 48vw;
  height: 55vh;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
  opacity: 1000000;
`;

export const CategoryModalListBox = styled(CategoryModalBox)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  background-color: red;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: blue;
  width: 100%;
  height: 10%;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  font-size: 2.5vw;
  border: none;
  background-color: transparent;
`;

export const CloseButton = styled(Button)`
  position: relative;
  top: -10px;
  right: 5px;
`;
export const AddButton = styled(Button)``;
