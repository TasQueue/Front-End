import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categories } from 'recoil/test/atoms';
import { useRecoilState } from 'recoil';
import * as D from './DeleteCategory.styled';

interface IForm {
  title: string;
}
interface IDeleteCategory {
  clickedColor: string;
  index: number;
  title: string;
  onClose: (arg0: boolean) => void;
}
const DeleteCategory = ({ clickedColor, index, title, onClose }: IDeleteCategory) => {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const [color, setColor] = React.useState(clickedColor);
  const [palleteOpen, setPalleteOpen] = useState(false);
  const [userCategories, setUserCategories] = useRecoilState(categories);
  // 팔레트에서 색깔 선택 완료 시 호출되는 함수
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  // 변경된 정보 제출 함수
  const onVaild = ({ title }: IForm) => {
    const updatedCategory = {
      text: title,
      color,
    };
    const updatedArray = [...userCategories];
    updatedArray.splice(index, 1);
    updatedArray.splice(index, 0, updatedCategory);
    setUserCategories(() => {
      return [...updatedArray];
    });
    setValue('title', title);

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
    // console.log(updatedArray);
    updatedArray.splice(index, 1);
    // console.log(updatedArray);
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
          <D.CategoryInput {...register('title', { required: true })} type='text' placeholder={`${title}`} />
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
                <CirclePicker
                  color={color}
                  width='270px'
                  colors={[...D.colors]}
                  onChangeComplete={handleChangeComplete}
                />
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
