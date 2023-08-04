import styled from 'styled-components';

export const CategoryModalListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 48vw;
  height: 55vh;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 2.5vh;
  // background-color: green;
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 5%;
  // background-color: white;
  padding-left: 1vw;
  margin-bottom: 2.5vh;
  font-size: 1.3vw;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  // background-color: red;
  overflow: scroll;
`;
/*
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  width: 92%;
  height: 82%;
  background-color: transparent;
  overflow-y: scroll;
`;

*/
export const ElementCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 0.5vw;
  background-color: ${(props) => props.color};
  color: white;
  padding-left: 1vw;
  margin-bottom: 1.5vh;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  // background-color: blue;
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
