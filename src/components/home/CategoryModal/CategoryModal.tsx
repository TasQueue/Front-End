import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Icategory, categories } from 'recoil/test/atoms';
import { useRecoilState } from 'recoil';
import BasicDialog from 'components/common/Dialog/BasicDialog';
import * as C from './CategoryModal.styled';
import AddCategory from './AddCategory';

const CategoryModal = ({ onClose }) => {
  const [userCategories, setUserCategories] = useRecoilState(categories);
  const [openAddModal, setOpenAddModal] = useState(false);
  const closeAddModal = () => {
    // console.log('asdf');
    setOpenAddModal(false);
  };
  const closeModal = () => {
    onClose();
  };

  const openAddCategoryModal = () => {
    console.log(1);
  };
  return (
    <C.CategoryModalListBox>
      <C.CategoryContainer>
        <C.TitleCard onClick={() => setOpenAddModal(true)}>+ 카테고리 추가</C.TitleCard>
        <BasicDialog
          open={openAddModal}
          onClose={closeAddModal}
          contentComponent={<AddCategory onClose={closeAddModal} />}
        />
        ;
        <C.CategoryList>
          {userCategories.map((value) => {
            return (
              <C.ElementCard key={value.text} color={value.color}>
                {value.text}
              </C.ElementCard>
            );
          })}
        </C.CategoryList>
      </C.CategoryContainer>
      <C.Buttons>
        <C.CloseButton onClick={closeModal}>ⅹ</C.CloseButton>
      </C.Buttons>
    </C.CategoryModalListBox>
  );
};

export default CategoryModal;
