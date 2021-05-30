import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

export default function MainList({ response }) {
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const handleOpen = () => {
    debugger
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center">Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response?.map(
              ({ title, objectID, created_at, author, url }, i) => (
                <TableRow key={objectID} onClick={handleOpen}>
                  <TableCell component="th" scope="row">
                    {title}
                  </TableCell>
                  <TableCell align="center">{author}</TableCell>
                  <TableCell align="center">{url}</TableCell>
                  <TableCell align="center">{created_at}</TableCell>
                  <TableCell align="center">
                    <button
                      type="button"
                      onClick={() =>
                        handleOpen()
                      }
                    >
                      Open Modal
                    </button>
                    <Modal
                      open={open}
                      onClose={()=>handleClose()}
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
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
