import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import BeerDetails from "./BeerDetails";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "50px",
  },
  media: {
    height: "300px",
    width: "150px",
  },
  showMedia: {
    height: "500px",
    width: "180px",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  button: {
    background: "black",
    border: "1px solid black",
    borderRadius: "25px",
    minWidth: "200px",
  },
});

export default function BeerCard({ data }) {
  const classes = useStyles();
  const [isShown, setIsShown] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  const handlebuttonClick = (event) => {
    event.preventDefault();
    setShowDetails(true);
  };

  return (
    <Card className={classes.root}>
      <CardContent
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => {
          setIsShown(false);
          setShowDetails(false);
        }}
      >
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item lg={4} md={4} xl={4}>
            <img
              alt={data.name}
              className={showDetails ? classes.showMedia : classes.media}
              src={data?.image_url}
            />
          </Grid>
          <Grid item lg={8} md={8} xl={8}>
            <Grid
              container
              direction="column"
              spacing={4}
              justifyContent="space-around"
            >
              <Grid item>
                <Typography variant="h5" className={classes.cardTitle}>
                  {data?.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" className={classes.subTitle}>
                  {data?.tagline}
                </Typography>
              </Grid>

              {isShown && (
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    onClick={handlebuttonClick}
                  >
                    <Typography>
                      {showDetails ? "Hide Details" : "Show Details"}
                    </Typography>
                  </Button>
                </Grid>
              )}

              {showDetails && (
                <Grid item>
                  <BeerDetails beerDetails={data} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
