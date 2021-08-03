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
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Headers = ({name, setPage}) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={()=>{setMenu(!menu)}}
            >
            Menu 
              <MenuIcon/>
            </IconButton>
            {menu? <Menu id="simple-menu" keepMounted menu={menu} setPage={setPage} name={name}/> : <></>}
            <Typography variant="h6" className={classes.title}>
              Kevin Hernandez
            </Typography>
          </Toolbar>

      </AppBar>
    </div>
  );
}

export default Headers
