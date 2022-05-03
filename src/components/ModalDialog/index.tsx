import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './ModalDialog.scss';

interface ModalDialogProps {
  children: React.ReactNode;
  title: string;
  open?: boolean;
  onClose: () => void;
};

const ModalDialog: React.FC<ModalDialogProps> = ({ children, title, open = false, onClose }) => {
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title" className="modal-top">
        {title}
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }}></CloseIcon>
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
