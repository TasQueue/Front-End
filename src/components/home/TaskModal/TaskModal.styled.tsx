import styled from 'styled-components';
import { Checkbox } from '@mui/material';

export const TaskModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 40px auto 50px;
`;

export const TaskCheckbox = styled(Checkbox)({
  '&.Mui-checked': {
    color: 'gray',
  },
  gridArea: '1/1/1/1',
});

export const TaskModalContent = styled.div`
  background: yellow;
  grid-area: 2/2/3/3;
`;

export const TaskNameInput = styled.input`
  font-size: 30px;
  grid-area: 1/2/2/3;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TaskModalButton = styled.div`
  background: red;
  grid-area: 3/2/4/3;
`;
