import React from 'react';
import { CheckboxWrapper, StyledInput } from './Checkbox.styled';

// TODO Checkbox 쓰는 모든 곳에서 checked 값을 내려주면 default값 삭제할 것
export const Checkbox = ({ label, updatefn, checked = false }) => {
  return (
    <CheckboxWrapper className='checkbox-wrapper'>
      <div>
        <StyledInput
          id='checkbox'
          type='checkbox'
          defaultChecked={checked}
          onClick={(e) => {
            updatefn((prev) => !prev);
            e.stopPropagation();
          }}
        />
      </div>

      <p>{label}</p>
    </CheckboxWrapper>
  );
};
