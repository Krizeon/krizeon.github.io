import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
      </Container>
    </div>
  );
}

export default Content;
