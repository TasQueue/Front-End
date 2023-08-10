import { useRecoilState } from 'recoil';
import SelectOption from '../../../common/SelectOption/SelectOption';
import { TaskModalState } from '../../../../recoil/task/atoms';

interface CategoryList {
  id: number;
  text: string;
  color: string;
}

// TODO: 나중에 아래 model 파일 분리할 것
const mockCategoryList: CategoryList[] = [
  { id: 0, text: '없음', color: 'black' },
  { id: 2, text: '학교 수업', color: 'orange' },
  { id: 3, text: '취미', color: 'green' },
  { id: 4, text: '없음34234', color: 'red' },
  { id: 5, text: '두비두비두밥바', color: 'black' },
  { id: 6, text: '졸려요', color: 'black' },
  { id: 7, text: '~~', color: 'gray' },
];

const CategorySelect = () => {
  const [tempData, setTempData] = useRecoilState(TaskModalState);

  const clickCategoryItem = (value: number) => {
    setTempData({ ...tempData, categoryId: value });
  };

  return (
    <SelectOption optionList={mockCategoryList} defaultValueId={tempData.categoryId} onClickItem={clickCategoryItem} />
  );
};

export default CategorySelect;
