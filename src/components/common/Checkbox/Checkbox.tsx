import { CheckboxWrapper, StyledInput } from './Checkbox.styled';

export const Checkbox = ({ label, updatefn }) => {
  return (
    <CheckboxWrapper className='checkbox-wrapper'>
      <div>
        <StyledInput id='checkbox' type='checkbox' onChange={() => updatefn((prev) => !prev)} />
      </div>
      <p>{label}</p>
    </CheckboxWrapper>
  );
};
