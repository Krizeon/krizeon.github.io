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
    marginRight: theme.spacing(2),
  },
}));

const Menu = ({name, setPage}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem onClick={()=> {setPage("home")}}>Home</MenuItem>
          <MenuItem onClick={()=> {setPage("about")}}>About</MenuItem>
          <MenuItem onClick={()=> {setPage("projects")}}>Projects</MenuItem>
          <MenuItem onClick={()=> {setPage("contact")}}>Contact</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}

export default Menu;
