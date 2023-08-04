import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categories } from 'recoil/test/atoms';
import { useSetRecoilState } from 'recoil';
import * as A from './AddCategory.styled';

interface IForm {
  title: string;
}

const AddCategory = ({ onClose }) => {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const [color, setColor] = React.useState('#000');
  const [palleteOpen, setPalleteOpen] = useState(false);
  const setUserCategories = useSetRecoilState(categories);
  // 팔레트에서 색깔 선택 완료 시 호출되는 함수
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  // 폼 제출
  const onVaild = ({ title }: IForm) => {
    const newCategory = {
      text: title,
      color,
    };
    setUserCategories((oldCategories) => {
      return [...oldCategories, newCategory];
    });
    setValue('title', '');
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
  return (
    <A.AddCategoryModalBox>
      <A.GoToBack onClick={closeModal}>🔙</A.GoToBack>
      <A.Form onSubmit={handleSubmit(onVaild)}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <A.CategoryInput {...register('title', { required: true })} type='text' placeholder='카테고리를 입력하세요' />
        <A.ColorArea>
          <A.ChooseBar>
            <h1 style={{ fontSize: '1.5vw' }}>카테고리 색상</h1>
            <A.ControlBar onClick={openColorModal}>
              <A.SlectedColor color={color} />
              {!palleteOpen ? <span>▲</span> : <span>▼</span>}
            </A.ControlBar>
          </A.ChooseBar>
          <A.PalleteContainer>
            {palleteOpen && (
              <A.Pallete>
                <CirclePicker
                  color={color}
                  width='270px'
                  colors={[...A.colors]}
                  onChangeComplete={handleChangeComplete}
                />
              </A.Pallete>
            )}
          </A.PalleteContainer>
        </A.ColorArea>
        <A.AddButton value='추가하기' />
      </A.Form>
    </A.AddCategoryModalBox>
  );
};

export default AddCategory;
