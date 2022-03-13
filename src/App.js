//TODO: Add background-color to landing page (gradient orange - see previous project version)
//TODO: Add hover- and active - effect for card
//TODO: Create the rice page adding items like dropdown menu, list (like in Data Import Item)

import "./App.css";

import Grid from "@mui/material/Grid";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Rice from "./Rice";
import Noodle from "./Noodle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* import { CardContent } from "@mui/material";
import Card from "@material-ui/core/Card"; */

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/rice" element={<Rice />} />
            <Route path="/noodle" element={<Noodle />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

<Grid
  container
  direction="row"
  alignItems="center"
  justifyContent="center"
  marginTop="15%"
></Grid>;
