import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Test from "./pages/test";
import Home from "./pages/home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
