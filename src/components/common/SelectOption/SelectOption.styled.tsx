import styled from 'styled-components';

export const OptionSelectWrapper = styled.div`
  position: relative;
`;

export const OptionListBox = styled.ul<{ $openList: boolean }>`
  width: fit-content;
  max-height: 225px;
  overflow-y: auto;
  background: white;
  border: solid 1px;
  border-radius: 10px;
  padding: 0;
  display: ${({ $openList }) => ($openList ? '' : 'none')};
  position: absolute;
  z-index: 1;

  max-width: 400px; //TODO 조정하기. 텍스트 최대 길이 체크할 것
  text-overflow: ellipsis;
  white-space: nowrap;

  // OptionList scroll 커스텀
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightslategray;
    border-radius: 20px;
  }
`;

export const OptionItemWrapper = styled.li<{ color: string }>`
  list-style-type: none;
  font-size: 2.5rem;
  padding: 5px 10px;
  color: ${(props) => props.color};
`;
