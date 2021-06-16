import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import useStyles from "../styles.js";
const Description = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Photo Album
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Hello everyone , this is a photo album and I am trying to learn Material
        UI and I have to create a long paragraph with so many texts.
      </Typography>
      <div className={classes.buttons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              See My Photos
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Secondary Action
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Description;
