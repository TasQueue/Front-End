// TODO: 나중에 아래 model 파일 분리할 것

import { useEffect, useState } from 'react';
import * as S from './SelectOption.styled';
import BasicTextButton from '../Button/BasicTextButton';

interface Options {
  id: number;
  text: string;
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

  // TODO 열려있을 때 밖을 누르면 창이 닫히도록 할 것
  return (
    <S.OptionSelectWrapper>
      <BasicTextButton
        buttonText={defaultOption?.text || ''}
        buttonColor={defaultOption?.color || 'black'}
        onClick={() => setOpenList(true)}
      />
      <S.OptionListBox $openList={openList}>
        {optionList.map((it) => (
          <S.OptionItemWrapper key={it.id} color={it.color}>
            <button type='button' onClick={() => handleClickOption(it.id)}>
              {it.text}
            </button>
          </S.OptionItemWrapper>
        ))}
      </S.OptionListBox>
    </S.OptionSelectWrapper>
  );
};

export default SelectOption;
