import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "../styles.js";
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icons} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
