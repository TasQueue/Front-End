import CloseIcon from '@mui/icons-material/Close';
import * as T from './TaskModal.styled';
import CategorySelect from './CategorySelect/CategorySelect';

const TaskModal = ({ onClose }) => {
  return (
    <T.TaskModalWrapper>
      <T.TaskCheckbox color='default' />
      {/* TODO: defaultValue 나중에 수정 가능하게 함수 연결 */}
      <T.TaskNameInput type='text' defaultValue='데이터 받아서 세팅데이터 받아서 세팅데이터 받아서 세팅' />
      <CloseIcon sx={{ width: '30px', height: '30px', placeSelf: 'center' }} onClick={onClose} />
      <T.TaskModalContent>
        <CategorySelect />
        {/*    날짜 선택 */}
        {/*    시간 선택 컴포넌트 */}
        {/*    하루종일 & 캘린더 표시 체크박스 */}
        {/*    반복 없음 컴포넌트 */}
      </T.TaskModalContent>

      {/*  완료/삭제 버튼 만들기 */}
      <T.TaskModalButton />
    </T.TaskModalWrapper>
  );
};

export default TaskModal;
