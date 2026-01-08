import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Career Explorer</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/explore" className="hover:text-yellow-300">Explore</Link>
        <Link to="/quiz" className="hover:text-yellow-300">Quiz</Link>
        <Link to="/roadmap" className="hover:text-yellow-300">Roadmap</Link>
        <Link to="/shadowpro" className="hover:text-yellow-300">Shadow a Pro</Link>
      </div>
    </nav>
  );
};

export default Navbar;
