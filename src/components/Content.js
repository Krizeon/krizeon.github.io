import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Content = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          This is a placeholder!
        </Typography>
        <Typography variant="h5" component="h2">
          Place{bull}hol{bull}der
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          this is another placholder
        </Typography>
        <Typography variant="body2" component="p">
          lorem ipsum.
          <br />
          {'"another placeholder"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Don't Learn More!</Button>
      </CardActions>
    </Card>
  );
}

export default Content;
