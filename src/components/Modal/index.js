import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function CustomModal({onHandleOpen}) {
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onHandleOpen={onHandleOpen}
      onClose={() => handleClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle}>
        {title}
        {author}
        {url}
        {created_at}
      </div>
    </Modal>
  );
}
