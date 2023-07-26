import { useState } from 'react';
import SelectOption from '../../../common/SelectOption/SelectOption';

interface CategoryList {
  id: number;
  name: string;
  color: string;
}

// TODO: 나중에 아래 model 파일 분리할 것
const mockCategoryList: CategoryList[] = [
  { id: 1, name: '없음', color: 'black' },
  { id: 2, name: '학교 수업', color: 'orange' },
  { id: 3, name: '취미', color: 'green' },
  { id: 4, name: '없음34234', color: 'red' },
  { id: 5, name: '두비두비두밥바', color: 'black' },
  { id: 6, name: '졸려요', color: 'black' },
  { id: 7, name: '~~', color: 'gray' },
];

const CategorySelect = () => {
  const clickCategoryItem = (value: number) => {
    setDefaultValueId(value);
  };
  const [defaultValueId, setDefaultValueId] = useState(1);

  return <SelectOption optionList={mockCategoryList} defaultValueId={defaultValueId} onClickItem={clickCategoryItem} />;
};

export default CategorySelect;
