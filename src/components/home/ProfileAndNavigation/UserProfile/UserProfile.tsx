import React from 'react';
import { useRecoilState } from 'recoil';
import { userThemeColorState } from '../../../../recoil/userInfoState';
import * as U from './UserProfile.styled';
import { useUserQuery } from '../../../../hooks/queries/useUserQuery';

const UserProfile = () => {
  const { user, isLoading } = useUserQuery();

  const [themeColor] = useRecoilState(userThemeColorState);

  return (
    <U.UserProfileContainer>
      <U.UserProfileImg src={`/assets/images/Cat/${user?.catState}.svg`} alt='UserProfileCat' />
      <U.UserProfileName
        style={{
          backgroundImage: `linear-gradient(transparent 0.8rem, ${themeColor} 0.8rem)`,
        }}
      >
        {user?.name}
      </U.UserProfileName>

      <U.UserProfileStatus>{user?.intro}</U.UserProfileStatus>
    </U.UserProfileContainer>
  );
};

export default UserProfile;
