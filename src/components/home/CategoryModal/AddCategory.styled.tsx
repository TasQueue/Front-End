import { styled } from 'styled-components';

export const AddCategoryModalBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
export const GoToBack = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: flex-start;
  font-size: 2vw;
  border: none;
  width: 5%;
  height: 100%;
  padding-left: 2%;
`;

export const Form = styled.form`
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 80%;
`;

export const CategoryInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 7vh;
  width: 80%;
`;

export const ColorBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;
export const ChooseBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SlectedColor = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 1.5vw;
  background-color: ${(props) => props.color};
  margin-right: 1vw;
`;

export const PalleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 80%;
`;
export const Pallete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 75%;
  background-color: #e0e0e0;
`;

export const colors = [
  'red',
  'pink',
  'purple',
  'hotpink',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'gold',
  'orange',
  'peachPuff',
  'brown',
  'olive',
];

export const AddButton = styled.button.attrs({ type: 'button' })`
  position: relative;
  left: 17vw;
  background-color: #508bff;
  color: white;
  width: 7vw;
  height: 4.5vh;
  text-align: center;
  border-radius: 1vw;
`;
