import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categories } from 'recoil/test/atoms';
import { useRecoilState } from 'recoil';
import * as T from './AddCategory.styled';

const AddCategory = ({ setAddCategoryModalOpen }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [color, setColor] = React.useState('#000');
  const [colorModalopen, setColorModalopen] = useState(false);
  const [userCategories, setUserCategories] = useRecoilState(categories);
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  const onVaild = ({ title }) => {
    const newCategory = {
      text: title,
      color,
    };
    setUserCategories((oldCategories) => {
      return [...oldCategories, newCategory];
    });

    setValue('title', '');
  };
  const closeModal = () => {
    setAddCategoryModalOpen(false);
  };

  const openColorModal = () => {
    if (colorModalopen === false) {
      setColorModalopen(true);
    } else {
      setColorModalopen(false);
    }
  };
  return (
    <T.AddCategoryModalBox>
      <T.GoToBack onClick={closeModal}>🔙</T.GoToBack>
      <T.Form onSubmit={handleSubmit(onVaild as never)}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <T.CategoryInput {...register('title', { required: true })} type='text' placeholder='카테고리를 입력하세요' />
        <T.ColorBar>
          <T.ChooseBar>
            <h1 style={{ fontSize: '1.5vw' }}>카테고리 색상</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '5vw',
                height: '5vw',
                position: 'relative',
              }}
            >
              <T.SlectedColor color={color} />
              <button type='button' onClick={openColorModal}>
                ▼
              </button>
            </div>
          </T.ChooseBar>
          <T.PalleteContainer>
            {colorModalopen && (
              <T.Pallete>
                <CirclePicker
                  color={color}
                  width='270px'
                  colors={[...T.colors]}
                  onChangeComplete={handleChangeComplete}
                />
              </T.Pallete>
            )}
          </T.PalleteContainer>
        </T.ColorBar>
        <T.AddButton type='submit'>추가하기</T.AddButton>
      </T.Form>
    </T.AddCategoryModalBox>
  );
};

export default AddCategory;
