import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },
  cornerHeader: {
    fontFamily: 'georgia',
    fontSize: 24,
    fontWeight: 'lighter',
    color: '#4d4d4d'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#4d4d4d'
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    margin: '0 10vw',
    paddingTop: '40px',
    background: '#ffffff',
    borderBottom: 'solid 1px #363f45',
    overflow: 'auto',
    color: 'white',
    height: 60,
    padding: '0 20px',
  },
}));

const Headers = ({name, page, setPage}) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  const clickNameGoHome = () => {
    setPage('Home');
  }

  return (
    <Toolbar className={classes.bar}>
      <Typography
        variant="h6"
        className={classes.cornerHeader}
        onClick={clickNameGoHome}
      >
        Kevin Hernandez
      </Typography>
        <Menu
        id="simple-menu"
        href={page}
        keepMounted
        menu={menu}
        setPage={setPage}
        page={page}
        name={name}/>
      </Toolbar>
  );
}

export default Headers
