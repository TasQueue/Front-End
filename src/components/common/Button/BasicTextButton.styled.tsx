import styled from 'styled-components';

export const BasicTextButton = styled.button<{ color: string | undefined }>`
  width: fit-content;
  padding: 5px 13px;
  font-size: 2.5rem;
  background: ${(props) => props.color};
  color: white;
  border-radius: 13px;
`;
