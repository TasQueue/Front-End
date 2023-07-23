import styled from 'styled-components';

export const UserProfileContainer = styled.section`
  width: 7.292vw;
  height: 29vh;
  opacity: 0.8;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const UserProfileName = styled.div`
  font-size: 1.5rem;
  font-weight: 1000;
  background-image: linear-gradient(transparent 50%, rgba(177, 187, 231, 0.5) 50%);
  background-repeat: no-repeat;
`;
export const UserProfileStatus = styled.div`
  font-size: 1.3rem;
  background-color: #ffffff;
  border-radius: 20%;
  width: 6.8vw;
  height: 10vh;
  opacity: 1;
  padding: 1vh 0;
`;
export const UserProfileImg = styled.img`
  width: 90%;
  border-radius: 50%;
  margin: 1.5vh 0 1.8vh 0;
`;