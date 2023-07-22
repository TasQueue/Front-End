import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 4.2857vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const SelectedMonthLabel = styled.p`
  color: black;
  font-size: 20px;
  text-align: center;
`;

const TodayButton = styled.button`
  border-radius: 16px;
  background: #c2d9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 2.639vw;
  height: 4.2857vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRightSection = styled.div`
  width: 7.847vw;
  height: 100%;
  display: flex;
`;

const ButtonContainer = styled.div`
  width: 4.514vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.694vw;
`;

export { SelectedMonthLabel, TodayButton, Header, HeaderRightSection, ButtonContainer };
