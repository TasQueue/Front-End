import styled from 'styled-components';

export const FollowingProfileContainer = styled.div`
  width: 19.097vw;
  height: 21vh;
  opacity: 0.8;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const FollowingFriendsWrapParent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.6vh 0;
`;
export const FollowingFriendsWrap = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5vw;
  padding: 1px;
  margin: 1px;
  border-radius: 30%;
`;
export const FollowingFriendsImg = styled.img`
  width: 85%;
  border-radius: 50%;
`;

export const FriendsName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  background-image: linear-gradient(transparent 50%, rgba(231, 177, 215, 0.8) 50%);
  background-repeat: no-repeat;
`;
