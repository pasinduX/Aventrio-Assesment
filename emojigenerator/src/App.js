import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateStoryPage from "./components/StoryCreation";
import GeneratedStoryPage from "./components/StoryView";
import ViewAllStories from "./components/ViewAllStories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-story" element={<CreateStoryPage />} />
        <Route path="/story-display" element={<GeneratedStoryPage />} />
        <Route path="/view-all-story" element={<ViewAllStories />} />
      </Routes>
    </Router>
  );
};

export default App;
