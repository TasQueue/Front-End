import styled from 'styled-components';

export const Container = styled.section`
  width: 40.764vw;
  height: 97.1429vh;
  opacity: 0.8;
  margin: 1.4286vh 0;
  padding: 14px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Days = styled.div`
  display: flex;
  align-items: center;
  margin: 0 12px 15px 82px;
  padding: 8px 10px;
  background-color: rgba(194, 217, 250, 1);
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TimeTable = styled.div`
  padding: 7px;
  display: flex;
`;

export const Times = styled.div`
  flex-shrink: 0;
  width: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
`;

export const Canvas = styled.canvas`
  margin-top: 5px;
`;
