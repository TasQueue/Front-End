import styled from 'styled-components';

export const Label = styled.p`
  font-size: 3rem;
  margin: 2vh 0 1vh 1vw;
  transition: font-size 0.5s ease;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24vw;
  height: 5vh;
  margin: 2vh 0 3vh 1vw;
  background-color: #c2d9fa;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  transition: height 0.5s ease;

  @media (max-width: 1024px) {
    height: 4vh;
  }

  @media (max-width: 768px) {
    height: 3vh;
  }

  @media (max-width: 480px) {
    height: 2vh;
  }
`;
export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0 1vw 0 0;
  transition: font-size 0.5s ease;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  :focus {
    outline: none;
  }
`;
export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2vw;
  height: 3.6vh;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  transition: height 0.5s ease;

  @media (max-width: 1024px) {
    height: 2.5vh;
  }

  @media (max-width: 768px) {
    height: 2vh;
  }

  @media (max-width: 480px) {
    height: 1.8vh;
  }
`;
export const BtnIcon = styled.img`
  width: 1.5vw;
`;
export const foundUsersWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2vh 0;
`;

export const foundUsersCat = styled.img`
  width: 5vw;
  border-radius: 50%;
`;
export const foundUsersName = styled.p`
  font-size: 2rem;
  width: 16vw;
  margin: 0 0 0 2vw;

  transition: font-size 0.5s ease;

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
