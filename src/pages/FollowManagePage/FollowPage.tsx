import React from 'react';
import YourFollowing from './YourFollowing/YourFollowing';
import YourFollower from './YourFollower/YourFollower';
import RequestFollow from './RequestFollow/RequestFollow';
import SearchUser from './SearchUser/SearchUser';

import * as F from './FollowPage.styled';

const FollowingPage = () => {
  return (
    <F.Follow>
      <F.FirstSection>
        <YourFollowing />
      </F.FirstSection>
      <F.SecondSection>
        <YourFollower />
      </F.SecondSection>
      <F.ThirdSection>
        <RequestFollow />
      </F.ThirdSection>
      <F.FourthSection>
        <SearchUser />
      </F.FourthSection>
    </F.Follow>
  );
};

export default FollowingPage;
