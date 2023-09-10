import React, { useState } from 'react';
import { categories } from 'recoil/test/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import BasicDialog from 'components/common/Dialog/BasicDialog';
import axios from 'axios';
import { useGetCategories } from 'hooks/queries/category/useGetCategories';
import { authToken } from 'class/authToken';
import * as C from './CategoryModal.styled';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';
// 카테고리 메인 모달
const CategoryModal = ({ onClose }) => {
  const userCategories = useRecoilValue(categories); // 카테고리 아톰 값
  const setCategories = useSetRecoilState(categories);
  const [openAddModal, setOpenAddModal] = useState(false); // 추가하기 모달 열기 state
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // 삭제하기 모달 열기 state
  const [clickedTitle, setClickedTitle] = useState(''); // 클릭된 카테고리의 카테고리 이름 state
  const [clickedIndex, setClickedIndex] = useState(0); // 클릭된 카테고리의 카테고리 index state
  const [clickedColor, setClickedColor] = useState(''); // 클리된 카테고리의 색깔 state
  // 추가하기 모달을 닫는 함수
  const closeAddModal = () => {
    setOpenAddModal(false);
  };
  // 삭제하기 모달을 닫는 함수
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  // 카테고리 메인 모달을 닫는 함수
  const closeModal = () => {
    onClose();
  };
  // TitleCard를 클릭하면 추가하기 모달이 열린다.
  // ElementCard를 클릭하면 삭제하기 모달이 열린다.

  // API getCategories
  const { data, isLoading, isError, isSuccess } = useGetCategories();

  try {
    setCategories(data.categoryList);
  } catch (error) {
    return <div>Loding</div>;
  }
  return (
    <C.CategoryModalListBox>
      <C.CategoryContainer>
        <C.TitleCard onClick={() => setOpenAddModal(true)}>+ 카테고리 추가</C.TitleCard>
        <C.CategoryList>
          {userCategories.map((value, index) => {
            return (
              <C.ElementCard
                key={value.name}
                color={value.color}
                onClick={() => {
                  setClickedTitle(value.name);
                  setClickedIndex(index);
                  setClickedColor(value.color);
                  setOpenDeleteModal(true);
                }}
              >
                {value.name}
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
      {/* 카테고리 삭제 모달 */}
      <BasicDialog
        open={openDeleteModal}
        onClose={closeDeleteModal}
        contentComponent={
          <DeleteCategory
            clickedColor={clickedColor}
            index={clickedIndex}
            CategoryTitle={clickedTitle}
            onClose={closeDeleteModal}
          />
        }
      />
    </C.CategoryModalListBox>
  );
};

export default CategoryModal;
