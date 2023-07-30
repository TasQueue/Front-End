import React, { useState } from 'react';
import * as U from './UserProfile.styled';

const UserProfile = () => {
  const catImgs = [
    '/assets/images/Cat/badCat.svg',
    '/assets/images/Cat/normalCat.svg',
    '/assets/images/Cat/goodCat.svg',
    '/assets/images/Cat/perfectCat.svg',
  ];
  const [currentCat, setCurrentCat] = useState(catImgs[0]);

  return (
    <U.UserProfileContainer>
      <U.UserProfileImg src={currentCat} alt='UserProfileCat' />
      <U.UserProfileName>냐옹냥폼미쳤다</U.UserProfileName>
      <U.UserProfileStatus>
        하기 싫어도 해라 우울해도 해라 행복해도 해라 불안해도 해라 죽고 싶어도 해라
      </U.UserProfileStatus>
    </U.UserProfileContainer>
  );
};

export default UserProfile;
