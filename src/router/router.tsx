import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Countries from "../views/Countries/Countries";
import DetailCountry from "../views/Countries/DetailCountry";

export default function Router() {
  const componentToRender = (
    <Routes>
        {/* Route to represent the main page */}
      <Route path="/" element={<Countries></Countries>}></Route>
      {/* Route to redirect to detail country */}
      <Route
        path="/:countryCode"
        element={<DetailCountry></DetailCountry>}
      ></Route>
    </Routes>
  );
  return (
    <BrowserRouter>
        <MainLayout>{componentToRender}</MainLayout>
    </BrowserRouter>
  );
}
