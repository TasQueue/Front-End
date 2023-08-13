import React from 'react';
import { Link } from 'react-router-dom';
import * as N from './Navigation.styled';

const Navigation = () => {
  return (
    <N.NavigationContainer>
      <N.NavigationWrap>
        <N.NavigationIcon src='/assets/icons/Category3.svg' alt='Category3' />
        <N.NavigationLabel>카테고리</N.NavigationLabel>
      </N.NavigationWrap>
      <N.NavigationWrap as={Link} to='/followManage'>
        <N.NavigationIcon src='/assets/icons/User-group.svg' alt='User-group' />
        <N.NavigationLabel>사람들</N.NavigationLabel>
      </N.NavigationWrap>
      <N.NavigationWrap>
        <N.NavigationIcon src='/assets/icons/Search.svg' alt='Search' />
        <N.NavigationLabel>검색</N.NavigationLabel>
      </N.NavigationWrap>
      <N.NavigationWrap as={Link} to='/setting'>
        <N.NavigationIcon src='/assets/icons/Settings.svg' alt='Settings' />
        <N.NavigationLabel>설정</N.NavigationLabel>
      </N.NavigationWrap>
    </N.NavigationContainer>
  );
};

export default Navigation;
