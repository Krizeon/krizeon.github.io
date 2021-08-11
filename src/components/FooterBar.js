import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(45deg, #cdcdcd 30%, #efefefef 90%)',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  spacing: {
      padding: '150px 0 0 0'
  }
}));

const FooterBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.spacing}>
      <footer className={classes.footer}>
        <Container>
          <Typography component="div" style={{ backgroundColor: '#fffffff'}} >
          <Link
            color="inherit"
            href="https://github.com/Krizeon"
          >
            Github -
          </Link>
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/kevin-hernandez-3816331a7/"
          >
            - LinkedIn -
          </Link>
          <Link
            color="inherit"
            href="/add-link-here/"
          >
          - Instagram
          </Link>
        </Typography>
      </Container>
    </footer>
  </div>
  );
}

export default FooterBar
