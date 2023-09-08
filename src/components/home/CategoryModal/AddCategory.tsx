import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { categories } from 'recoil/test/atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserAccessToken } from 'recoil/user/atom';
import * as process from 'process';
import axios from 'axios';
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
  const [test, setTest] = useState();
  const accessToken = useRecoilValue(UserAccessToken);
  const API_URL = process.env.REACT_APP_TASQUEUE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/users/my-info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setTest(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(test);
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
