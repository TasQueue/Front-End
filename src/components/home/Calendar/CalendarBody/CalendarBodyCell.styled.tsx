import styled from 'styled-components';

const CalendarBodyCellContainer = styled.div<{ isSelectedDate: boolean }>`
  background-color: ${(props) => (props.isSelectedDate ? '#c2d9fa' : 'white')};
  border-radius: 12px;
  border: 1px solid #dedede;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const DateLabel = styled.p`
  font-size: 12px;
  color: black;
`;

export { CalendarBodyCellContainer, DateLabel };
