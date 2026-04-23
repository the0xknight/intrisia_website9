import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import ExplorePage from "./pages/explorepage";
import QuizPage from "./pages/quizpage";
import RoadmapPage from "./pages/roadmap";
import Shadowpro from "./pages/shadowpro";
import CareerDetailsPage from "./pages/CareerDetailsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/shadowpro" element={<Shadowpro />} />
        <Route path="/career/:id" element={<CareerDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
