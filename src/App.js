import { StrictMode, useState } from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
//import ThemeContext from "./ThemeContext";
import Details from "./Details";

const App = () => {
  const theme = useState("darkblue");

  return (
   
      <StrictMode>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </StrictMode>
   
  );
};
render(<App />, document.getElementById("root"));
