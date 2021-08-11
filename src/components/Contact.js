import React from 'react';
import ContentSeparator from './ContentSeparator'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


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
    <Container maxWidth="sm">
      <div maxWidth="50">
        <p align="justify">
          This is my Contact Page! Reach me at my email until this page
          is completed. Note: The form below is currently under construction.
          It will not send a message right now!
        </p>
         <form className={classes.root} noValidate autoComplete="off">
           <TextField required id="filled-basic" label="Full Name" variant="filled" />
           <TextField required id="filled-basic" label="Email" variant="filled" />
           <TextField id="filled-basic" label="Company" variant="filled" />
         </form>
         <TextareaAutosize aria-label="Message" minRows={15} placeholder="Say your piece..." />
        <ContentSeparator/>
      </div>
  </Container>
  );
}

export default Contact;
