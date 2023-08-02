import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19.097vw;
  height: 7.4286vh;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const NavigationIcon = styled.img`
  width: 1.25vw;
  display: flex;
  text-align: center;
`;
export const NavigationWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  border-radius: 24px;
  width: 4.2vw;
  height: 6.2vh;
  margin: 1px 3px;
`;

export const NavigationLabel = styled.div`
  font-size: 1.4rem;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.2rem;
  }
`;
