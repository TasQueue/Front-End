import styled from 'styled-components';

export const SettingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #c2d9fa;
  width: 100vw;
  height: 100vh;
`;

export const ChangeWhiteBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  border-radius: 5%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: relative;
  justify-content: space-between;
`;
export const ProfileImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translateX(-50%);
  border-radius: 50%;
`;

export const ChangeWrap = styled.div`
  display: flex;
`;
export const NameChange = styled.input`
  font-size: 2.2rem;
  margin: 13vh 0 0 0;
  font-weight: 500;
  border: none;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const StatusChange = styled.textarea`
  width: 30vw;
  height: 9vh;
  font-size: 1.8rem;
  margin: 0 0 3vh 0;
  resize: none;
  border: none;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const GrassChangeLabel = styled.p``;
// export const GrassColor = styled.div``;

export const ChangeBtn = styled.button`
  background-color: #d9d9d9;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 0 0 5vh 0;
`;
export const Modal = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #cefce6;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const TwoButtonWrap = styled.div`
  display: flex;
  height: 10%;
  padding: 12vh 0 0 0;
`;

export const LogoutBtn = styled.button`
  background-color: #508bff;
  color: #ffffff;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin: 0 2vw 0 0;
`;
export const DeleteBtn = styled.button`
  background-color: #ff5050;
  color: #ffffff;
  width: 9vw;
  height: 4.8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
