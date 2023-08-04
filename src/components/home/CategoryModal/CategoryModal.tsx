import React, { useState } from 'react';
import { Icategory, categories } from 'recoil/test/atoms';
import { useRecoilState } from 'recoil';
import * as C from './CategoryModal.styled';

const CategoryModal = ({ setModalOpen }) => {
  const [userCategories, setUserCategories] = useRecoilState(categories);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <C.CategoryModalListBox>
      <C.CategoryContainer>
        <C.TitleCard>+ 카테고리 추가</C.TitleCard>
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
        <C.CloseButton onClick={closeModal}>X</C.CloseButton>
      </C.Buttons>
    </C.CategoryModalListBox>
  );
};

export default CategoryModal;
