import React, { useState } from 'react';
import { categories } from 'recoil/test/atoms';
import { useRecoilValue } from 'recoil';
import BasicDialog from 'components/common/Dialog/BasicDialog';
import * as C from './CategoryModal.styled';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';

const CategoryModal = ({ onClose }) => {
  const userCategories = useRecoilValue(categories);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [clickedTitle, setClickedTitle] = useState('');
  const [clickedIndex, setClickedIndex] = useState(0);
  const [clickedColor, setClickedColor] = useState('');
  const closeAddModal = () => {
    setOpenAddModal(false);
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const closeModal = () => {
    onClose();
  };

  return (
    <C.CategoryModalListBox>
      <C.CategoryContainer>
        <C.TitleCard onClick={() => setOpenAddModal(true)}>+ 카테고리 추가</C.TitleCard>
        <C.CategoryList>
          {userCategories.map((value, index) => {
            return (
              <C.ElementCard
                key={value.text}
                color={value.color}
                onClick={() => {
                  setClickedTitle(value.text);
                  setClickedIndex(index);
                  setClickedColor(value.color);
                  setOpenDeleteModal(true);
                }}
              >
                {value.text}
              </C.ElementCard>
            );
          })}
        </C.CategoryList>
      </C.CategoryContainer>
      <C.Buttons>
        <C.CloseButton onClick={closeModal}>ⅹ</C.CloseButton>
      </C.Buttons>
      {/* 카테고리 추가 모달 */}
      <BasicDialog
        open={openAddModal}
        onClose={closeAddModal}
        contentComponent={<AddCategory onClose={closeAddModal} />}
      />
      <BasicDialog
        open={openDeleteModal}
        onClose={closeDeleteModal}
        contentComponent={
          <DeleteCategory
            clickedColor={clickedColor}
            index={clickedIndex}
            title={clickedTitle}
            onClose={closeDeleteModal}
          />
        }
      />
    </C.CategoryModalListBox>
  );
};

export default CategoryModal;
