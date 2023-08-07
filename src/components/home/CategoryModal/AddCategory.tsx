import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categories } from 'recoil/test/atoms';
import { useSetRecoilState } from 'recoil';
import * as A from './AddCategory.styled';

interface IForm {
  title: string;
}
interface IAddCategory {
  onClose: (arg0: boolean) => void;
}
const AddCategory = ({ onClose }: IAddCategory) => {
  const { register, setValue, handleSubmit } = useForm<IForm>(); // // react-hook-form
  const [color, setColor] = React.useState('red'); // 색갈 state
  const [palleteOpen, setPalleteOpen] = useState(false); // 팔레트 오픈 state
  const setUserCategories = useSetRecoilState(categories); // 카테고리 아톰 state
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
      <A.GoToBack onClick={closeModal}>←</A.GoToBack>
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
            {palleteOpen && <ChromePicker color={color} disableAlpha onChangeComplete={handleChangeComplete} />}
          </A.PalleteContainer>
        </A.ColorArea>
        <A.AddButton value='추가하기' />
      </A.Form>
    </A.AddCategoryModalBox>
  );
};

export default AddCategory;
