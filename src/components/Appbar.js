import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
// import MenuIcon from 'material-ui-icons/Menu';

function Navbar(props) {

  return (
    <div>
      <AppBar position="fixed" className="nav-bar" color="default">
        <Toolbar className="nav-flex">
        <Grid item xs="10">
          <Typography variant="title" className="nav-title">
            Study Buddy!
          </Typography>
          </Grid>
          <Grid item xs="2" className="nav-flex">
          <Button variant="raised" id="btn" className="nav-bar-btn">Login</Button>
          <Button variant="raised" className="nav-bar-btn">Sign Up</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default (Navbar);
