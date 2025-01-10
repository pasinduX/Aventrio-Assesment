import React, { useEffect, useState } from "react";
import {getAllStories} from "../services/storyService";
const ViewAllStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getAllStories();
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>All Stories</h1>

      {loading && (
        <div style={{ color: "#fff", fontSize: "18px" }}>
          Loading stories...
        </div>
      )}

      {error && (
        <div
          style={{
            backgroundColor: "#f44336",
            padding: "10px",
            borderRadius: "4px",
            color: "#fff",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          {error}
        </div>
      )}

      {!loading && !error && stories.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {stories.map((story, index) => (
            <div
              key={story.id || index}
              style={{
                backgroundColor: "#333",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "10px" }}>
                {story.authorNickName}
              </h3>
              <p
                style={{
                  color: "#ddd",
                  fontSize: "16px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {story.createdAt}
              </p>
              <p
                style={{
                  color: "#fff",
                  marginBottom: "10px",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {story.emojiSequence?.join(" ")}
              </p>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "16px",
                  textAlign: "center",
                  wordWrap: "break-word",
                }}
              >
                {story.storyText || "No story text available."}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && stories.length === 0 && (
        <div style={{ color: "#fff", fontSize: "18px" }}>
          No stories available.
        </div>
      )}
    </div>
  );
};

export default ViewAllStories;
