import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { catState } from '../../../../recoil/catState';
import * as U from './UserProfile.styled';

const UserProfile = () => {
  const UserInfo = [
    {
      name: '냐옹냥폼미쳤다',
      status: '하기 싫어도 해라 우울해도 해라 행복해도 해라 불안해도 해라 죽고 싶어도 해라',
      themeColor: '#a2abf8',
    },
  ];

  const catImgs = [
    '/assets/images/Cat/badCat.svg',
    '/assets/images/Cat/normalCat.svg',
    '/assets/images/Cat/goodCat.svg',
    '/assets/images/Cat/perfectCat.svg',
  ];
  const [currentCat, setCurrentCat] = useRecoilState(catState);

  return (
    <U.UserProfileContainer>
      <U.UserProfileImg src={currentCat} alt='UserProfileCat' />
      <U.UserProfileName
        style={{
          padding: '1px 5px',
          backgroundImage: `linear-gradient(transparent 0.6rem, ${UserInfo[0].themeColor} 0.7)`,
        }}
      >
        {UserInfo[0].name}
      </U.UserProfileName>
      <U.UserProfileStatus>{UserInfo[0].status}</U.UserProfileStatus>
    </U.UserProfileContainer>
  );
};

export default UserProfile;
