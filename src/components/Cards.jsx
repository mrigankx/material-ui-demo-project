import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "../styles.js";
const cards = [1, 2, 3, 4, 5];
const Cards = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardmedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent className={classes.cardcontent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    This is a media card. This is a description part.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary" size="small">
                    View
                  </Button>
                  <Button color="primary" size="small">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Cards;
