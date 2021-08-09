import React from 'react';
import ContentSeparator from './ContentSeparator'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return(
    <div>
      <p>
        This is my Contact Page! Reach me at my email until this page
        is completed. Note: The form below is currently under construction.
        It will not send a message right now!
      </p>
       <form className={classes.root} noValidate autoComplete="off">
         <TextField required id="filled-basic" label="Full Name" variant="filled" />
         <TextField required id="filled-basic" label="Email" variant="filled" />
         <TextField id="filled-basic" label="Company" variant="filled" />
           <TextField required id="filled-basic" label="Message" variant="outlined" />
       </form>
      <ContentSeparator/>
    </div>
  );
}

export default Contact;
