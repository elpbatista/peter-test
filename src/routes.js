import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Test from "./pages/test";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Services from "./pages/services";
import Contribute from "./pages/contribute";
import Projects from "./pages/projects";
import Data from "./pages/data";
import Statutes from "./pages/statutes";
import Documentation from "./pages/documentation";
import Visualization from "./pages/visualization";
import Downloads from "./pages/downloads";
import API from "./pages/api";
import Partners from "./pages/partners";
import Map from "./pages/map";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/data" element={<Data />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/statutes" element={<Statutes />} />
      <Route path="/visualization" element={<Visualization />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/api" element={<API />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/map" element={<Map />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
