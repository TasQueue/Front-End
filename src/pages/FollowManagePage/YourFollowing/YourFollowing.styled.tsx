import styled from 'styled-components';

export const Conatiner = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;
export const Title = styled.h3`
  font-size: 1.5vw;
`;

export const Elements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 0 2vh 0;
`;

export const UsersCat = styled.img`
  width: 5vw;
  border-radius: 50%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 60%;
`;
export const UsersName = styled.p`
  font-size: 2rem;
  width: 80%;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
  height: 3vh;
  border-radius: 50%;
  background-color: silver;
`;
