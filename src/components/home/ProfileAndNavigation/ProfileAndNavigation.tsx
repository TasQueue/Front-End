import React from 'react';
import FollowingProfile from './FollowingProfile/FollowingProfile';
import Navigation from './Navigation/Navigation';
import * as P from './ProfileAndNavigation.styled';
import UserProfile from './UserProfile/UserProfile';

const ProfileAndNavigation = () => {
  return (
    <P.ProfileAndNavigationContainer>
      <P.LeftSection>
        <UserProfile />
      </P.LeftSection>
      <P.RightSection>
        <FollowingProfile />
        <Navigation />
      </P.RightSection>
    </P.ProfileAndNavigationContainer>
  );
};

export default ProfileAndNavigation;
