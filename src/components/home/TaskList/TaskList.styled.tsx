import styled from 'styled-components';

export const TaskListContainer = styled.section`
  width: 29.375vw;
  height: 97.1429vh;
  opacity: 0.8;
  margin: 1.4286vh 0;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  //chan
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  overflow: scroll;
  font-family: 'Orbit', sans-serif;
`;

/* 
chan's mention
width 92%
*/

// 현재 년/월/일 => 후에는 현재 선태된 날짜가 되어야 함
export const Header = styled.header`
  width: 92%;
  font-size: 2.8vw;
  margin-bottom: 5px;
`;

// 상단 2번 째 위치하는 기능 Bar
export const FunctionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  height: 5%;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 10px;
  background-color: #c2d9fa;
  color: #8c98ae;
`;

// "테스크 추가하기" 안내말
export const InfoWord = styled.div`
  width: 33%;
  height: 57%;
  font-size: 1vw;
  overflow: hidden;
  span {
    position: relative;
    bottom: 1px;
  }
`;

// 캘린더 표시, 테스크 생성 버튼들의 div
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 65%;
`;

// 캘린더 표시 버튼
export const MarkAtCalender = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40%;
  background-color: #c9c9c9;
  color: whitesmoke;
  border: none;
  border-radius: 8px;
  padding: 4px;
  font-size: 0.5vw;
  overflow: hidden;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
`;

// 테스크 생성 모달 버튼
export const CreateTask = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #c2d9fa;
  height: 60%;
  width: 15%;
  padding-top: 1.3px;
  border-radius: 8px;
  font-size: 1vw;
  &:hover {
    background-color: skyblue;
    color: blue;
  }
  span {
    position: relative;
    bottom: 1px;
  }
`;
