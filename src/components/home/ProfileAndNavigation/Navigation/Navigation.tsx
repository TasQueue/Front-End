import React from 'react';
import { Link } from 'react-router-dom';
import BasicDialog from 'components/common/Dialog/BasicDialog';
import CategoryModal from 'components/home/CategoryModal/CategoryModal';
import * as N from './Navigation.styled';

const Navigation = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(() => false);
  };

  return (
    <N.NavigationContainer>
      <N.NavigationWrap>
        <N.NavigationIcon src='/assets/images/Navigation-icon/Category3.svg' alt='Category3' />
        <N.NavigationLabel onClick={() => setOpenModal(true)}>카테고리</N.NavigationLabel>
        <BasicDialog open={openModal} onClose={closeModal} contentComponent={<CategoryModal onClose={closeModal} />} />
      </N.NavigationWrap>
      <N.NavigationWrap as={Link} to='/followManage'>
        <N.NavigationIcon src='/assets/images/Navigation-icon/User-group.svg' alt='User-group' />
        <N.NavigationLabel>사람들</N.NavigationLabel>
      </N.NavigationWrap>
      <N.NavigationWrap>
        <N.NavigationIcon src='/assets/images/Navigation-icon/Search.svg' alt='Search' />
        <N.NavigationLabel>검색</N.NavigationLabel>
      </N.NavigationWrap>
      <N.NavigationWrap as={Link} to='/setting'>
        <N.NavigationIcon src='/assets/images/Navigation-icon/Settings.svg' alt='Settings' />
        <N.NavigationLabel>설정</N.NavigationLabel>
      </N.NavigationWrap>
    </N.NavigationContainer>
  );
};

export default Navigation;
