import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as S from './SelectRepeatModal.styled';

interface SelectRepeatModalProps {
  controlStep: () => void;
}
const SelectRepeatModal = ({ controlStep }: SelectRepeatModalProps) => {
  return (
    <>
      <KeyboardBackspaceIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={controlStep} />
      <S.SelectRepeatModalContent>반복여부를 결정하자</S.SelectRepeatModalContent>
    </>
  );
};
export default SelectRepeatModal;
