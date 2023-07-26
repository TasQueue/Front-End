import { CheckboxWrapper, StyledInput } from './Checkbox.styled';

export const Checkbox = ({ label, updatefn }) => {
  return (
    <CheckboxWrapper className='checkbox-wrapper'>
      <StyledInput id='checkbox' type='checkbox' onChange={() => updatefn((prev) => !prev)} />
      <span>{label}</span>
    </CheckboxWrapper>
  );
};
