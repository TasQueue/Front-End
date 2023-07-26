import styled from 'styled-components';

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  width: 1.3em;
  height: 1.3em;
  border-radius: 0.4em;
  margin-right: 1.5em;
  border: 0.15em solid #c0c0c0;
  outline: none;
  cursor: pointer;

  &:checked {
    position: relative;
    background-color: 'white';
  }

  &:checked::before {
    content: '✓';
    font-size: 135%;
    color: black;
    position: relative;
    right: -2px;
    top: -2.5px;
  }

  &:checked + p {
    color: black;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
