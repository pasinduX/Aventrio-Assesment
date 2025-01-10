import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GeneratedStoryPage = () => {
  const { state } = useLocation();
  const { result, nickname } = state || {};
  const [story, setStory] = useState([]);
  const [displayedStory, setDisplayedStory] = useState([]);
  const [error, setError] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const navigate = useNavigate();

  const handleStoriesView = async () => {
    navigate("/view-all-story", {});
  };

  useEffect(() => {
    if (state?.translation) {
      const words = state.translation.split(" ");
      setStory(words);
    } else {
      setError("Failed to generate the story. Please try again.");
    }
  }, [state]);

  useEffect(() => {
    if (story.length > 0) {
      const interval = setInterval(() => {
        setDisplayedStory((prev) => [...prev, story[currentWordIndex]]);
        setCurrentWordIndex((prev) => prev + 1);
      }, 300);

      if (currentWordIndex >= story.length) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [story, currentWordIndex]);

  return (
    <div
      className="generated-story-page"
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
    >
      <div
        className="generated-story-container"
        style={{
          padding: "40px",
          borderRadius: "8px",
          backgroundColor: "#333",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}
        >
          Generated Story
        </h2>

        <p
          style={{
            color: "#fff",
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {nickname}, this is your story...!!!
        </p>

        {!story.length && !error && (
          <div
            style={{
              color: "#fff",
              fontSize: "18px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <p>Loading your story...</p>
          </div>
        )}

        {story.length > 0 && (
          <div
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "4px",
              color: "#fff",
              textAlign: "center",
              marginBottom: "20px",
              wordWrap: "break-word",
            }}
          >
            <p>{displayedStory.join(" ")}</p>
            <p style={{ fontSize: "24px" }}>
              {state.emojiSequence.map((emoji, index) => (
                <span key={index} style={{ marginRight: "10px" }}>
                  {emoji}
                </span>
              ))}
            </p>
          </div>
        )}

        {error && (
          <div
            style={{
              backgroundColor: "#f44336",
              padding: "20px",
              borderRadius: "4px",
              color: "#fff",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <p>{error}</p>
          </div>
        )}
        <button
        onClick={handleStoriesView}
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "#6200ea",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Click To View Other Stories !!
        </button>
      </div>
    </div>
  );
};

export default GeneratedStoryPage;
