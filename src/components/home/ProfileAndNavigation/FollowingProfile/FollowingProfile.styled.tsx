import styled from 'styled-components';

export const FollowingProfileContainer = styled.div`
  width: 19.097vw;
  height: 21vh;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FollowingFriendsWrapParent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const FollowingFriendsWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.5vw;
  padding: 2px;
  margin: 3px;
  border-radius: 30%;
`;
export const FollowingFriendsImg = styled.img`
  width: 80%;
  border-radius: 50%;
`;

export const FriendsName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    font-size: 8px;
  }

  @media (max-width: 768px) {
    font-size: 7px;
  }

  @media (max-width: 480px) {
    font-size: 5px;
  }
`;
