import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <Shop />
          </>
        }
      />
    </Routes>
  );
}

export default App;
