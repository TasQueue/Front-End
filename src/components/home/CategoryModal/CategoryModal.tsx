import React, { useState } from 'react';
import { categories } from 'recoil/test/atoms';
import * as T from './CategoryModal.styled';

const CategoryModal = ({ setModalOpen }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [userCategories, setUserCategories] = useState(categories);
  console.log(userCategories);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <T.CategoryModalListBox>
      <T.Buttons>
        <T.CloseButton onClick={closeModal}>X</T.CloseButton>
      </T.Buttons>
      <T.CategoryContainer>
        <h1>+ 카테고리 추가</h1>
      </T.CategoryContainer>
    </T.CategoryModalListBox>
  );
};

export default CategoryModal;
