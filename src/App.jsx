import React from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Create from "./Create";
import Uptade from "./Uptade";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/edit/:id" element={<Uptade></Uptade>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
