import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./Menubar/MenuBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from "./routes";

function App() {
  return (
    <Router>
      <MenuBar/>
      <div className="container mt-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
