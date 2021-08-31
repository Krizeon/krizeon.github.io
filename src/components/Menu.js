import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    flexGrow: 1,
    disableGutters: 'true',
    color: '#4d4d4d',
  },
}));


const Menu = ({name, page, setPage}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

        {page==="Home" ?
          <u>
            <MenuItem className={classes.paper} onClick={()=> {setPage("Home")}}>Home</MenuItem>
          </u>
          :
          <MenuItem className={classes.paper} onClick={()=> {setPage("Home")}}>Home</MenuItem>
        }

        {page==="About" ?
          <u>
            <MenuItem className={classes.paper} onClick={()=> {setPage("About")}}>About</MenuItem>
          </u>
          :
          <MenuItem className={classes.paper} onClick={()=> {setPage("About")}}>About</MenuItem>
          }

        {page==="Projects" ?
          <u>
            <MenuItem className={classes.paper} onClick={()=> {setPage("Projects")}}>Projects</MenuItem>
          </u>
          :
          <MenuItem className={classes.paper} onClick={()=> {setPage("Projects")}}>Projects</MenuItem>
          }

        {page==="Art" ?
          <u>
            <MenuItem className={classes.paper} onClick={()=> {setPage("Art")}}>Art</MenuItem>
          </u>
          :
          <MenuItem className={classes.paper} onClick={()=> {setPage("Art")}}>Art</MenuItem>
          }

        {page==="Contact" ?
          <u>
            <MenuItem className={classes.paper} onClick={()=> {setPage("Contact")}}>Contact</MenuItem>
          </u>
          :
          <MenuItem className={classes.paper} onClick={()=> {setPage("Contact")}}>Contact</MenuItem>
          }
    </div>
  );
}

export default Menu;
