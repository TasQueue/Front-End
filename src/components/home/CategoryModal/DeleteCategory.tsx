import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categoryList } from 'recoil/test/atoms';
import { useRecoilState } from 'recoil';
import * as D from './DeleteCategory.styled';

interface IForm {
  categoryInput: string;
}
interface IDeleteCategory {
  clickedColor: string;
  index: number;
  CategoryTitle: string;
  onClose: (arg0: boolean) => void;
}
const DeleteCategory = ({ clickedColor, index, CategoryTitle, onClose }: IDeleteCategory) => {
  const { register, setValue, handleSubmit } = useForm<IForm>(); // react-hook-form
  const [color, setColor] = React.useState(clickedColor); // 색갈 state
  const [palleteOpen, setPalleteOpen] = useState(false); // 팔레트 오픈 state
  const [userCategories, setUserCategories] = useRecoilState(categoryList); // 카테고리 아톰 state
  // 팔레트에서 색깔 선택 완료 시 호출되는 함수
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  // 변경된 정보 제출 함수
  const onVaild = ({ categoryInput }: IForm) => {
    // 색깔만 변경할 경우 카테고리 값은 빈 문자열이 되므로 아래 코드를 추가
    const updatedStr = categoryInput !== '' ? categoryInput : CategoryTitle;
    const updatedCategory = {
      id: Date.now(),
      name: updatedStr,
      color,
    };
    const updatedArray = [...userCategories];
    updatedArray.splice(index, 1);
    updatedArray.splice(index, 0, updatedCategory);
    setUserCategories(() => {
      return [...updatedArray];
    });
    setValue('categoryInput', categoryInput);

    setPalleteOpen(false);
  };
  // 모달 close를 제어하는 함수
  const closeModal = () => {
    onClose(false);
  };
  // 팔레트를 open/close를 제어하는 함수
  const openColorModal = () => {
    return palleteOpen === false ? setPalleteOpen(true) : setPalleteOpen(false);
  };
  // 카테고리 삭제
  const deleteCategory = () => {
    const updatedArray = [...userCategories];
    updatedArray.splice(index, 1);
    setUserCategories(() => updatedArray);
    alert('정말로 삭제하시겠습니까????'); // eslint-disable-line no-alert
    closeModal();
  };

  return (
    <D.DeleteCategoryModalBox>
      <D.GoToBack onClick={closeModal}>←</D.GoToBack>
      <D.Form onSubmit={handleSubmit(onVaild)}>
        <D.CategoryHeader>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <D.CategoryInput {...register('categoryInput')} type='text' placeholder={`${CategoryTitle}`} />
          <D.UpdateButton value='변경' />
        </D.CategoryHeader>
        <D.ColorArea>
          <D.ChooseBar>
            <h1 style={{ fontSize: '1.5vw' }}>카테고리 색상</h1>
            <D.ControlBar onClick={openColorModal}>
              <D.SlectedColor color={color} />
              {!palleteOpen ? <span>▲</span> : <span>▼</span>}
            </D.ControlBar>
          </D.ChooseBar>
          <D.PalleteContainer>
            {palleteOpen && (
              <D.Pallete>
                {palleteOpen && <ChromePicker color={color} disableAlpha onChangeComplete={handleChangeComplete} />}
              </D.Pallete>
            )}
          </D.PalleteContainer>
        </D.ColorArea>
        <D.DeleteButton value='삭제하기' onClick={deleteCategory} />
      </D.Form>
    </D.DeleteCategoryModalBox>
  );
};

export default DeleteCategory;
