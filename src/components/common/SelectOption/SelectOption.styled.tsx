import styled from 'styled-components';

export const SelectButton = styled.button<{ color: string | undefined }>`
  width: fit-content;
  padding: 5px 10px;
  font-size: 20px;
  background: ${(props) => props.color};
  color: white;
  border-radius: 16px;
`;

// TODO 스크롤 커스텀하기
export const OptionListBox = styled.ul<{ $openList: boolean }>`
  width: fit-content;
  max-height: 225px;
  overflow-y: auto;
  background: white;
  border: solid 1px;
  border-radius: 10px;
  padding: 0;
  display: ${({ $openList }) => ($openList ? '' : 'none')};
`;

export const OptionItemWrapper = styled.li<{ color: string }>`
  list-style-type: none;
  font-size: 20px;
  padding: 5px 10px;
  color: ${(props) => props.color};
`;
