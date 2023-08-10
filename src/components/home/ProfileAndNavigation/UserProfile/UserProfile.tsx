import React from 'react';
import { useRecoilState } from 'recoil';
import { catState } from '../../../../recoil/catState';
import { userNameState, userStatusState, userThemeColorState } from '../../../../recoil/userInfoState';
import * as U from './UserProfile.styled';

const UserProfile = () => {
  const [currentCat] = useRecoilState(catState);
  const [name] = useRecoilState(userNameState);
  const [status] = useRecoilState(userStatusState);
  const [themeColor] = useRecoilState(userThemeColorState);

  return (
    <U.UserProfileContainer>
      <U.UserProfileImg src={currentCat} alt='UserProfileCat' />
      <U.UserProfileName
        style={{
          backgroundImage: `linear-gradient(transparent 0.8rem, ${themeColor} 0.8rem)`,
        }}
      >
        {name}
      </U.UserProfileName>

      <U.UserProfileStatus>{status}</U.UserProfileStatus>
    </U.UserProfileContainer>
  );
};

export default UserProfile;
