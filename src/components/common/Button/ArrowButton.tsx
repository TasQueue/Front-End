import React, { ButtonHTMLAttributes } from 'react';
import * as A from './ArrowButton.styled';

interface ownProps {
  direction: string;
  onClick: () => void;
}
const ArrowButton: React.FC<ownProps> = ({ onClick, direction }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // 만약 사용자가 onClick 프로퍼티를 전달했다면 해당 함수를 실행합니다.
    }
  };
  let show;
  if (direction === 'right') {
    show = <A.Label>&#62;</A.Label>;
  } else if (direction === 'left') {
    show = <A.Label>&#60;</A.Label>;
  }
  return <A.ButtonContainer onClick={handleClick}>{show}</A.ButtonContainer>;
};

// props로 left를 전달하면 왼쪽 화살표, right을 전달하면 오른쪽 화살표
export default ArrowButton;
