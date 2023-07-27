import styled from 'styled-components';

export const BasicTextButton = styled.button<{ color: string | undefined }>`
  width: fit-content;
  padding: 5px 10px;
  font-size: 20px;
  background: ${(props) => props.color};
  color: white;
  border-radius: 16px;
`;
