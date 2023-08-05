import styled from 'styled-components';

export const CategoryModalListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 48vw;
  height: 58vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  left: 2vw;
  width: 100%;
  padding-top: 2.5vh;
`;

export const TitleCard = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 5%;
  padding-left: 1vw;
  margin-bottom: 2.5vh;
  font-size: 2vw;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  overflow-y: auto;
`;

export const ElementCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 15%;
  border-radius: 1vw;
  background-color: ${(props) => props.color};
  color: white;
  padding-left: 1vw;
  margin-bottom: 1.5vh;
  font-size: 2vw;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
  height: 5vh;
  padding-top: 2px;
  padding-right: 5px;
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
