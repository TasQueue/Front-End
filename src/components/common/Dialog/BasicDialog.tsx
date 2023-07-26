import * as React from 'react';
import * as B from './BasicDialog.styled';

export interface BasicProps {
  open: boolean;
  onClose: () => void;
  contentComponent: React.ReactElement;
}

const BasicDialog = (props: BasicProps) => {
  const { onClose, open, contentComponent } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <B.BasicDialogWrapper onClose={handleClose} open={open}>
      <B.BasicBox>{contentComponent}</B.BasicBox>
    </B.BasicDialogWrapper>
  );
};

export default BasicDialog;
