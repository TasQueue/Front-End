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

  const updateCurrentPage = (increment) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + increment;
      if (newPage < 0 || newPage >= totalPages) return prevPage;
      return newPage;
    });
  };

  const handleNextClick = () => updateCurrentPage(1);

  const handlePrevClick = () => updateCurrentPage(-1);

  // 표시될 팔로잉 리스트 계산
  const computeDisplayedFriends = () => {
    const startIndex = currentPage * itemsPerPage;
    return following.slice(startIndex, startIndex + itemsPerPage);
  };

  // 계산 함수 호출
  const displayedFriends = computeDisplayedFriends();

  return (
    <F.FollowingProfileContainer>
      {currentPage > 0 && (
        <ArrowButton
          style={{
            position: 'fixed',
            top: '10%',
            left: '9%',
          }}
          direction='left'
          onClick={handlePrevClick}
        />
      )}
      <F.FollowingFriendsWrapParent>
        {displayedFriends.map((user) => (
          <F.FollowingFriendsWrap key={user.user.id}>
            <F.FollowingFriendsImg src={`/assets/images/Cat/${user?.catState}.svg`} alt={user.user.name} />
            <F.FriendsName
              style={{
                padding: '1px 5px',
                backgroundImage: `linear-gradient(transparent .6rem, ${user.themeColor} .6rem)`,
              }}
            >
              {user.user.name}
            </F.FriendsName>
          </F.FollowingFriendsWrap>
        ))}
      </F.FollowingFriendsWrapParent>
      {currentPage < totalPages - 1 && (
        <ArrowButton
          style={{
            position: 'fixed',
            top: '10%',
            left: '25.4%',
          }}
          direction='right'
          onClick={handleNextClick}
        />
      )}
    </F.FollowingProfileContainer>
  );
};

export default FollowingProfile;
