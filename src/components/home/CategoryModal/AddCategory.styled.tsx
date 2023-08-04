import { styled } from 'styled-components';

export const AddCategoryModalBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  width: 48vw;
  height: 55vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// 뒤로 가기 버튼
export const GoToBack = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: flex-start;
  font-size: 2vw;
  border: none;
  width: 15%;
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
  width: 85%;
  height: 80%;
`;
// 카테고리 입력창
export const CategoryInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 7vh;
  width: 80%;
`;
// 버튼 이전 까지의 영역
export const ColorArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;
// 카테고리 색상 + controlBar 영역
export const ChooseBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 팔레트를 펼치고 색을 선택하는 바
export const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 5vw;
  position: relative;
  top: -1.3vh;
`;

// 선택된 컬러가 둥근 원 안에 나타남
export const SlectedColor = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 1.5vw;
  background-color: ${(props) => props.color};
  margin-right: 1vw;
`;

// 팔레트가 담길 영역
export const PalleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 80%;
`;

// 색깔 팔레트
export const Pallete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 75%;
  background-color: #e0e0e0;
`;

// 추가하기 버튼
export const AddButton = styled.input.attrs({ type: 'submit' })`
  position: relative;
  left: 12.5vw;
  background-color: #508bff;
  color: white;
  width: 7vw;
  height: 4.5vh;
  text-align: center;
  border-radius: 1vw;
  border: none;
`;

// 팔레트 컬러
// 기본 컬러를 이용할라고 했으나 컬러 선택시 배경색이 투과되는 현상이 발생해 직접 색을 정하게 됨
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
