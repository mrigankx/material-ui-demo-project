import React from "react";
import { Typography, CssBaseline, Container } from "@material-ui/core";
import useStyles from "../styles.js";
import Header from "./Header";
import Description from "./Description";
import Cards from "./Cards";
const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Description />
          </Container>
        </div>
        <Cards />
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default App;
