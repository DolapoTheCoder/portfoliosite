import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./Menubar/MenuBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <MenuBar/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
