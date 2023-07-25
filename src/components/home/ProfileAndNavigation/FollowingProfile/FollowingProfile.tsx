import React from 'react';

import * as F from './FollowingProfile.styled';
import ArrowButton from '../../../common/Button/ArrowButton';

const FollowingProfile = () => {
  const FriendItem = [
    { id: 1, name: 'holy', imgSrc: '/assets/images/normalCat.svg' },
    { id: 2, name: '냐옹냥 ', imgSrc: '/assets/images/normalCat.svg' },
    { id: 3, name: '집', imgSrc: '/assets/images/normalCat.svg' },
    { id: 4, name: 'realGang', imgSrc: '/assets/images/normalCat.svg' },
    { id: 5, name: '꽁영', imgSrc: '/assets/images/normalCat.svg' },
    { id: 6, name: '울랄라세션', imgSrc: '/assets/images/normalCat.svg' },
  ];
  return (
    <F.FollowingProfileContainer>
      <F.FollowingProfileWrapParent>
        {FriendItem.map((friend) => (
          <F.FollowingFriendsWrap key={friend.id}>
            <F.FollowingFriendsImg src={friend.imgSrc} alt={friend.name} />
            <F.FriendsName> {friend.name}</F.FriendsName>
          </F.FollowingFriendsWrap>
        ))}
      </F.FollowingProfileWrapParent>
    </F.FollowingProfileContainer>
  );
};
export default FollowingProfile;
