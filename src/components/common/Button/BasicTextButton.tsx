import * as B from './BasicTextButton.styled';

interface BasicTextButtonProps {
  buttonText: string;
  buttonColor: string;
  onClick: () => void;
}

const BasicTextButton = ({ buttonText, buttonColor, onClick }: BasicTextButtonProps) => {
  return (
    <B.BasicTextButton type='button' onClick={onClick} color={buttonColor}>
      {buttonText}
    </B.BasicTextButton>
  );
};

export default BasicTextButton;
