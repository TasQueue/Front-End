import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgrey;
  color: black;
  font-family: Orbit;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.3px;
  white-space: nowrap; /* 한 줄에 모든 텍스트를 표시합니다. 줄 바꿈 없음 */
  overflow: hidden; /* 내용이 넘칠 경우 숨깁니다. */
  text-overflow: ellipsis; /* 내용이 넘칠 경우 '...'을 표시합니다. */
`;

export { Wrapper };
