// TODO: 나중에 아래 model 파일 분리할 것

import { useEffect, useState } from 'react';
import * as S from './SelectOption.styled';

interface Options {
  id: number;
  name: string;
  color: string;
}

interface SelectOptionProps {
  optionList: Options[];
  defaultValueId: number;
  onClickItem: (string) => void;
}

const SelectOption = ({ optionList, defaultValueId, onClickItem }: SelectOptionProps) => {
  const [defaultOption, setDefaultOption] = useState<Options | undefined>();

  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    const item: Options | undefined = optionList.find((it) => it.id === defaultValueId);
    setDefaultOption(item);
  }, [defaultValueId]);

  const handleClickOption = (id: number) => {
    onClickItem(id);
    setOpenList(false);
  };

  return (
    <>
      <S.SelectButton type='button' onClick={() => setOpenList(true)} color={defaultOption?.color}>
        {defaultOption?.name}
      </S.SelectButton>
      <S.OptionListBox $openList={openList}>
        {optionList.map((it) => (
          <S.OptionItemWrapper key={it.id} color={it.color}>
            <button type='button' onClick={() => handleClickOption(it.id)}>
              {it.name}
            </button>
          </S.OptionItemWrapper>
        ))}
      </S.OptionListBox>
    </>
  );
};

export default SelectOption;
