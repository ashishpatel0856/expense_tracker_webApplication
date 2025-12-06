import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex pt-20">

      {/* SIDEBAR FIXED */}
      <aside
        className="
          hidden md:flex flex-col
          w-64 bg-white shadow-lg p-6 
          fixed top-20 left-0
          h-[calc(100vh-80px)]
          overflow-y-auto
        "
      >
        <nav className="flex flex-col gap-4 mt-4 text-gray-700 font-semibold">
          <Link to="/dashboard" className="px-4 py-2 rounded hover:bg-yellow-200">Dashboard</Link>
          <Link to="/income" className="px-4 py-2 rounded hover:bg-yellow-200">Income</Link>
          <Link to="/expenses" className="px-4 py-2 rounded hover:bg-yellow-200">Expenses</Link>
          <Link to="/category" className="px-4 py-2 rounded hover:bg-yellow-200">Category</Link>
          <Link to="/filter" className="px-4 py-2 rounded hover:bg-yellow-200">Filter</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-0 md:ml-64 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
