import profilepic from '../assets/images/kevin-pic.jpeg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 400,
  },
});

const HomepageImage = () => {
  const classes = useStyles();
  return (
    <div class="center">
      <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={profilepic}
        >
        </CardMedia>
      </Card>
    </div>
  );
}

export default HomepageImage;
