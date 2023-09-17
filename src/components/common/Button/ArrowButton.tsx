import React, { HTMLAttributes } from 'react';
import * as A from './ArrowButton.styled';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}
const ArrowButton: React.FC<Props> = ({ direction, style, ...props }) => {
  const arrow = direction === 'left' ? <A.Label>&#60;</A.Label> : <A.Label>&#62;</A.Label>;
  return (
    <A.ButtonContainer type='button' onClick={props.onClick} style={style}>
      {arrow}
    </A.ButtonContainer>
  );
};

// props로 left를 전달하면 왼쪽 화살표, right을 전달하면 오른쪽 화살표
export default ArrowButton;
