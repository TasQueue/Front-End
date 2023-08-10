import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px 10px;
  width: 27vw;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: inherit;
  background-color: ${(props) => props.color};
`;
