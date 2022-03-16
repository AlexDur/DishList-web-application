import "./App.css";
import "./index.css";

import {
  Card,
  CardContent,
  Grid,
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
/* import Header from "@itm/header"; */

const Rice = () => {
  return (
    <>
      <div style={{ color: "orange", fontSize: 22, fontWeight: 1000 }}>
        Reisgerichte
      </div>
      ;
      {/*   <Header
        icon={
          <img
            style={{ width: 25, height: "auto", margin: "-2px -1px" }}
            alt="Digital Automotive"
          />
        }
      /> */}
      {/*    <Container> */}
      <Grid
        style={{
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        container
        spacing={8}
      >
        <Grid item xs={2.5}>
          <Card>
            <CardContent style={{ minHeight: "60px" }}>
              <h2 style={{ fontSize: "1.5rem", color: "orange" }}>
                Mit Fleisch
              </h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardContent style={{ minHeight: "60px", color: "orange" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Vegetarisch</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardContent style={{ minHeight: "60px", color: "orange" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Vegetarisch</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2.5}>
          <Card>
            <CardContent style={{ minHeight: "60px", color: "orange" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Vegan</h2>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12}>
          <Card>
            <CardContent style={{ minHeight: "100px" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Meine Gerichte</h2>
            </CardContent>
          </Card>
        </Grid> */}
        <Grid item xs={10}>
          <Card>
            <h2
              style={{
                padding: "10px 0 0 20px",
                fontSize: "1.5rem",
                fontWeight: 1000,
                color: "#00BFFF",
              }}
            >
              Gespeicherte Online-Rezepte
            </h2>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ color: "#00BFFF" }}>
                      Bezeichnung des Gerichts
                    </TableCell>
                    <TableCell align="center" style={{ color: "#00BFFF" }}>
                      Kommentar
                    </TableCell>
                    <TableCell align="center" style={{ color: "#00BFFF" }}>
                      Link
                    </TableCell>
                    <TableCell align="center" style={{ color: "#00BFFF" }}>
                      Zubereitungsdauer (min)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Kartoffelsalat</TableCell>
                    <TableCell align="center">ohne Speck</TableCell>
                    <TableCell align="center">www.Kartoffelsalate.de</TableCell>
                    <TableCell align="center">45</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/*    </Container> */};
    </>
  );
};

export default Rice;
