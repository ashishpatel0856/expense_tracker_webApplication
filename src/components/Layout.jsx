import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>

      {/* ----------- FIXED NAVBAR ----------- */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center px-6">
        <h1 className="text-xl font-bold">Money Manager</h1>
      </nav>

      {/* ----------- FIXED SIDEBAR + MAIN ----------- */}
      <div className="flex">
        
        {/* Left Sidebar Fixed */}
        <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg p-6 fixed top-16 left-0 h-[calc(100vh-64px)]">
          <nav className="flex flex-col gap-4 mt-4">
            <Link className="px-4 py-2 rounded hover:bg-yellow-200" to="/dashboard">Dashboard</Link>
            <Link className="px-4 py-2 rounded hover:bg-yellow-200" to="/income">Income</Link>
            <Link className="px-4 py-2 rounded hover:bg-yellow-200" to="/expenses">Expenses</Link>
            <Link className="px-4 py-2 rounded hover:bg-yellow-200" to="/category">Category</Link>
            <Link className="px-4 py-2 rounded hover:bg-yellow-200" to="/filter">Filter</Link>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 mt-20 md:ml-64 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default Layout;
