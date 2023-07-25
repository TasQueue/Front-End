import React from 'react';

import * as F from './FollowingProfile.styled';

const FollowingProfile = () => {
  return (
    <F.FollowingProfileContainer>
      <F.FollowingProfileWrapParent>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구1</F.FriendsName>
        </F.FollowingFriendsWrap>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구2</F.FriendsName>
        </F.FollowingFriendsWrap>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구3</F.FriendsName>
        </F.FollowingFriendsWrap>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구4</F.FriendsName>
        </F.FollowingFriendsWrap>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구5</F.FriendsName>
        </F.FollowingFriendsWrap>
        <F.FollowingFriendsWrap>
          <F.FollowingFriendsImg src='/assets/images/normalCat.svg' alt='cat' />
          <F.FriendsName>친구6</F.FriendsName>
        </F.FollowingFriendsWrap>
      </F.FollowingProfileWrapParent>
    </F.FollowingProfileContainer>
  );
};

export default FollowingProfile;
