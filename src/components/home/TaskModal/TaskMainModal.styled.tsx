import styled from 'styled-components';

export const TaskCheckbox = styled.div`
  place-self: center;
  grid-area: 1/1/1/1;
`;

export const TaskModalContent = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 20px;
  height: 100%;
`;

export const TaskNameInput = styled.input.attrs({ type: 'text' })`
  font-size: 2.5rem;
  grid-area: 1/2/2/3;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: none;
`;

export const TaskCategoryAndDate = styled.div`
  display: flex;
  gap: 20px;
`;

export const TaskModalButton = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 30px; /* 아래에서 30px 위에 위치 */
  left: 50%; /* 가로 가운데 정렬 */
  transform: translateX(-50%); /* 가로 가운데 정렬을 위한 변환 */

  & > button {
    width: 180px;
    text-align: center;
    margin: 0 10px;
  }
`;

export const CheckBoxesWrapper = styled.div`
  display: flex;
  font-size: 2.5rem;
  gap: 20px;

  & > div {
    width: fit-content;
  }

  & input {
    place-self: center;
  }
`;
