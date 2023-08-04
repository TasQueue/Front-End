import React from 'react';
import { useRecoilState } from 'recoil';
import { catState } from '../../../../recoil/catState';
import { userNameState, userStatusState } from '../../../../recoil/userInfoState';
import * as U from './UserProfile.styled';

const UserProfile = () => {
  const [currentCat, setCurrentCat] = useRecoilState(catState);
  const [name, setName] = useRecoilState(userNameState);
  const [status, setStatus] = useRecoilState(userStatusState);
  const UserInfo = [
    {
      themeColor: '#a2abf8',
    },
  ];

  return (
    <U.UserProfileContainer>
      <U.UserProfileImg src={currentCat} alt='UserProfileCat' />
      <U.UserProfileName
        style={{
          padding: '1px 5px',
          backgroundImage: `linear-gradient(transparent 0.6rem, ${UserInfo[0].themeColor} 0.7)`,
        }}
      >
        {name}
      </U.UserProfileName>
      <U.UserProfileStatus>{status}</U.UserProfileStatus>
    </U.UserProfileContainer>
  );
};

export default UserProfile;
