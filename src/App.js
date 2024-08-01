import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Contacts from "./components/pages/Contacts/Contacts";
import Projects from "./components/pages/Projects/Projects";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
