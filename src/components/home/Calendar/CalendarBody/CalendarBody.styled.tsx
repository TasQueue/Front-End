import styled from 'styled-components';

const CalendarBodyContainer = styled.button`
  width: 100%;
  height: 54.2857vh;
  margin-top: 1.4286vh;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  row-gap: 0.5714vh;
  column-gap: 0.069vw;
`;

export { CalendarBodyContainer };
