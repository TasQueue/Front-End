import styled from 'styled-components';

export const SelectRepeatModalContent = styled.div`
  grid-area: 2/2/3/3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 2.5rem;
  padding: 60px;
  & > div {
    height: fit-content;
  }
`;

export const SelectRepeatWeekContainer = styled.div<{ $disabled: boolean }>`
  visibility: ${({ $disabled }) => ($disabled ? 'hidden' : 'none')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DayContainer = styled.div<{ $isSelected: boolean }>`
  background: ${({ $isSelected }) => ($isSelected ? 'lightBlue' : 'lightGray')};
  width: 40px;
  height: 40px;
  border-radius: 16px;
  text-align: center;
`;
