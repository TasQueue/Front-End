import React from 'react';
import { CheckboxWrapper, StyledInput } from './Checkbox.styled';

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
