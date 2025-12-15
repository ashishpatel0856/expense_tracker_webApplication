import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Category from "./pages/Category";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <BrowserRouter>

      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD ROUTES with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expense />} />
          <Route path="/category" element={<Category />} />
          <Route path="/filter" element={<Filter />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
