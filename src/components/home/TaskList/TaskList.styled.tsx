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
  font-family: 'Orbit', sans-serif;
`;

// 선택된 날짜를 보여주는 Header
export const Header = styled.header`
  width: 92%;
  font-size: 2.8vw;
  margin-bottom: 5px;
`;

// form
export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 92%;
  height: 5%;
  padding: 10px;
  border-radius: 10px;
  background-color: #c2d9fa;
  color: #8c98ae;
  // form의 input
  input {
    width: 70%;
    font-size: 1vw;
    background-color: transparent;
    text-align: left;
    font-family: inherit;
    outline: none;
    border: none;
  }
  // form의 캘린더 표시 버튼
  button[type='button'] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 20%;
    background-color: #c9c9c9;
    color: whitesmoke;
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin-right: 2rem;
    font-size: 0.5vw;
    overflow: hidden;
    &:hover {
      background-color: skyblue;
      color: blue;
    }
  }
  // form의 + 버튼 (제출 버튼)
  button[type='submit'] {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #c2d9fa;
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    font-size: 1vw;
    &:hover {
      background-color: skyblue;
      color: blue;
    }
    span {
      position: relative;
      bottom: 1px;
    }
  }
`;
// toDoList Wrapper
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
