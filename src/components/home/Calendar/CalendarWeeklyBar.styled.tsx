import styled from 'styled-components';

const CalnedarWeeklyBarContainer = styled.div`
  width: 100%;
  height: 2.5714vh;
  border-radius: 8px;
  background: #c2d9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  margin-top: 1.4286vh;
`;

const WeeklyBarCell = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { CalnedarWeeklyBarContainer, WeeklyBarCell };
