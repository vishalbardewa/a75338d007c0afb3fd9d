import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useHistory, useLocation } from 'react-router-dom';

import {colors} from 'styles'

import Loader from 'components/loader';

import { exampleService } from 'services';
import Connector from 'utils/Connector';
import { Popup } from 'utils/SnackbarUtil';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    minWidth: 100,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 400,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


export default function ExampleFunc() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const { examplePropsData } = location.state || {};

  if (!examplePropsData) history.push('/')

  const [isLoading, setIsLoading] = React.useState(false);
  const [exampleData, setExampleData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  function handleOpen(data) {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  };

  function handler(capital) {
    
  }


  return (
    <>
      <Grid container component="main" className={classes.root}>
        {
          exampleData && exampleData.map(({ name, values }) => (
            <Grid item xs={12} sm={6} md={4} className={classes.login} square>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image={flag}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {value}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {value}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {value}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handler(data)} >Button</Button>
                  </CardActions>
                </Card>
            </Grid>
          ))
        }
      </Grid>

      <div>
        {
          open && (
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {capital}
              </DialogTitle>
              <DialogContent dividers>
                {
                  isLoading
                    ? (
                        <Loader size={20} color='white' />
                    )
                    : <>
                        <CardMedia
                          className={classes.media}
                          image={exampleData.example_icons[0]}
                        />
                        <Typography gutterBottom>
                          Name : {exampleData}
                        </Typography>
                        <Typography gutterBottom>
                          Value : {exampleData}
                        </Typography>
                        <Typography gutterBottom>
                          Value : {exampleData.wind_speed}
                        </Typography>
                        <Typography gutterBottom>
                          Value : {exampleData.precip}
                        </Typography>
                    </>
                }
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )
        }
      </div>
    </>
  );
}
