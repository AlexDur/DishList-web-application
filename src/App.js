//TODO: Add background-color to landing page (gradient orange - see previous project version)
//TODO: Make className work (for headers of subpages)
//TODO: Add hover- and active - effect for card
//TODO: Create the rice page adding items like dropdown menu, list (like in Data Import Item)

import "./App.css";

import LandingPage from "./LandingPage";
import Header from "./Header";
import Rice from "./Rice";
import Noodle from "./Noodle";
import InternationalKitchens from "./InternationalKitchens";
import Dessert from "./Dessert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



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
            <Route
              path="/international_kitchens"
              element={<InternationalKitchens />}
            />
            <Route path="/dessert" element={<Dessert />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
