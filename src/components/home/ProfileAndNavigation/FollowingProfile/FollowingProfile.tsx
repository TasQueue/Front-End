import { useState } from 'react';
import * as F from './FollowingProfile.styled';
import ArrowButton from '../../../common/Button/ArrowButton';
import { useFollowingQuery } from '../../../../hooks/queries/useFollowingQuery';

const FollowingProfile = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const { following: followingData } = useFollowingQuery();
  const following = followingData?.followingList || [];

  const totalPages = Math.ceil(following.length / itemsPerPage);

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFriends = following.slice(startIndex, endIndex);

  return (
    <F.FollowingProfileContainer>
      {following.length > itemsPerPage && <ArrowButton direction='left' onClick={handlePrevClick} />}

      <F.FollowingFriendsWrapParent>
        {Array.isArray(following) &&
          displayedFriends.map((user) => (
            <F.FollowingFriendsWrap key={user.id}>
              {/* <F.FollowingFriendsImg src={user.imgSrc} alt={user.name} /> */}
              <F.FriendsName
                style={{
                  padding: '1px 5px',
                  // backgroundImage: `linear-gradient(transparent 0.6rem, #${user.themeColor}  0.6rem)`,
                }}
              >
                {user.name}
              </F.FriendsName>
            </F.FollowingFriendsWrap>
          ))}
      </F.FollowingFriendsWrapParent>
      {following.length > itemsPerPage && <ArrowButton direction='right' onClick={handleNextClick} />}
    </F.FollowingProfileContainer>
  );
};
export default FollowingProfile;
