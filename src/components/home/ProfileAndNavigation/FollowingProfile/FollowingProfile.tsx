import React, { useState } from 'react';
import * as F from './FollowingProfile.styled';
import ArrowButton from '../../../common/Button/ArrowButton';

const FollowingProfile = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const FriendItem = [
    { id: 1, name: 'holy', imgSrc: '/assets/images/Cat/normalCat.svg', themeColor: 'rgba(231, 177, 215, 0.8)' },
    { id: 2, name: '냐옹냥 ', imgSrc: '/assets/images/Cat/perfectCat.svg', themeColor: 'rgba(201, 231, 177, 0.8)' },
    { id: 3, name: '집', imgSrc: '/assets/images/Cat/badCat.svg', themeColor: 'rgba(177, 231, 186, 0.8)' },
    { id: 4, name: 'realGang', imgSrc: '/assets/images/Cat/goodCat.svg', themeColor: 'rgba(189, 177, 231, 0.8)' },
    { id: 5, name: '꽁영', imgSrc: '/assets/images/Cat/normalCat.svg', themeColor: 'rgba(231, 206, 177, 0.8)' },
    { id: 6, name: '울랄라세션', imgSrc: '/assets/images/Cat/normalCat.svg', themeColor: 'rgba(147, 233, 255, 0.8)' },
    { id: 7, name: '꼬북이', imgSrc: '/assets/images/Cat/badCat.svg', themeColor: 'rgba(177, 231, 184, 0.8)' },
    { id: 8, name: '파이리', imgSrc: '/assets/images/Cat/normalCat.svg', themeColor: 'rgba(231, 177, 215, 0.8)' },
    { id: 9, name: '버터풀', imgSrc: '/assets/images/Cat/perfectCat.svg', themeColor: 'rgba(178, 255, 53, 0.8)' },
    { id: 10, name: '또가스', imgSrc: '/assets/images/Cat/normalCat.svg', themeColor: 'rgba(186, 51, 248, 0.8)' },
  ];

  const totalPages = Math.ceil(FriendItem.length / itemsPerPage);

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
  const displayedFriends = FriendItem.slice(startIndex, endIndex);

  return (
    <F.FollowingProfileContainer>
      <ArrowButton direction='left' onClick={handlePrevClick} />

      <F.FollowingFriendsWrapParent>
        {displayedFriends.map((friend) => (
          <F.FollowingFriendsWrap key={friend.id}>
            <F.FollowingFriendsImg src={friend.imgSrc} alt={friend.name} />
            <F.FriendsName
              style={{
                padding: '1px 5px',
                backgroundImage: `linear-gradient(transparent 0.6rem, ${friend.themeColor}  0.6rem)`,
              }}
            >
              {friend.name}
            </F.FriendsName>
          </F.FollowingFriendsWrap>
        ))}
      </F.FollowingFriendsWrapParent>
      <ArrowButton direction='right' onClick={handleNextClick} />
    </F.FollowingProfileContainer>
  );
};
export default FollowingProfile;
