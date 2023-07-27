import { styled } from '@mui/material/styles';
import { Box, Dialog } from '@mui/material';

// TODO : 기본 모달 크기,패딩 조절하기
export const BasicBox = styled(Box)({
  width: '700px',
  height: '500px',
  padding: '30px',
  display: 'flex',
});
export const BasicDialogWrapper = styled(Dialog)({
  '& .MuiBackdrop-root': {
    background: 'rgba(217, 217, 217, 0.6)',
  },
  '& .MuiDialog-paper': {
    maxWidth: 'none',
    borderRadius: '24px',
  },
});
