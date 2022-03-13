import * as React from "react";

import Card from "@mui/material/Card";
/* import CardActions from "@mui/material/CardActions"; */
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
/* import Button from "@mui/material/Button"; */
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import rice from "./900x600/rice.png";
import noodle from "./900x600/noodle.png";
import international_kitchens from "./900x600/international_kitchens.png";
import desert from "./900x600/desert.png";
/* import { hover } from "@testing-library/user-event/dist/hover"; */

const styles = {
  centerDiv: {
    display: "block",
    width: "50%",
  },
  description: {
    color: "blue",
    fontFamily: "fantasy",
    fontSize: 20,
    backgroundColor: "orange",
  },
  link: {
    textDecoration: "none",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "blue" : "red",
  padding: theme.spacing(),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: "150px 15px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Link to="rice/" style={styles.link}>
            <Card>
              <CardMedia component="img" width="400" image={rice} alt="rice" />
              <CardContent style={{ background: "orange", color: "white" }}>
                <Typography styles={styles.description}>
                  Reisgerichte
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="noodle/" style={styles.link}>
            <Card>
              <CardMedia
                component="img"
                width="400"
                image={noodle}
                alt="noodle"
              />
              <CardContent style={{ background: "orange", color: "white" }}>
                <Typography styles={styles.description}>
                  Nudelgerichte
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardMedia
              component="img"
              width="400"
              image={international_kitchens}
              alt="rice"
            />
            <CardContent style={{ background: "orange", color: "white" }}>
              <Typography styles={styles.description}>
                Internationale Küchen
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardMedia component="img" width="400" image={desert} alt="rice" />
            <CardContent style={{ background: "orange", color: "white" }}>
              <Typography styles={styles.description}>Desserts</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
