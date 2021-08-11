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
    overflow: 'auto',
  },
  cornerHeader: {
    fontFamily: 'georgia',
    fontSize: 24,
    fontWeight: 'lighter',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    background: 'linear-gradient(45deg, #cdcdcd 30%, #efefef 80%)',
    boxShadow: '0 3px 5px 2px rgba(163, 193, 173, .3)',
    overflow: 'auto',
    color: 'white',
    height: 60,
    padding: '0 20px',
  },
}));

const Headers = ({name, page, setPage}) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.cornerHeader}>
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

      </AppBar>
  );
}

export default Headers
