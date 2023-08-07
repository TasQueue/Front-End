import styled from 'styled-components';

const CalendarBodyCellContainer = styled.div<{
  isSelectedDate: boolean;
  backgroundOpacityRatio: number;
  rgbObj: object;
}>`
  background-color: rgba(194, 217, 250, ${(props) => props.backgroundOpacityRatio});
  border-radius: 12px;
  border: 2px solid ${(props) => (props.isSelectedDate ? 'black' : '#dedede')};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const DateLabel = styled.p`
  font-size: 12px;
  color: black;
`;

export { CalendarBodyCellContainer, DateLabel };
