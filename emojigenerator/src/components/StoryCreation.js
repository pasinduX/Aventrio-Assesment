import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { createStory } from "../services/storyService";

const CreateStoryPage = () => {
  const { state } = useLocation();
  const { nickname } = state || {};
  const [story, setStory] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isValid, setIsValid] = useState(true); 
  const navigate = useNavigate();

  const handleStoryChange = (e) => {
    const value = e.target.value;
    const regex =
      /^[{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+$/u;
    if (regex.test(value)) {
      setStory(value);
      setIsValid(true); 
    } else {
      setIsValid(false);
    }
  };

  const handleEmojiClick = (emoji) => {
    setStory((prevStory) => prevStory + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const handleSubmit = async () => {
    if (story.trim()) {
      const id = Date.now().toString();

      const emojiSequence = Array.from(story).filter((char) =>
        /\p{Emoji}/u.test(char)
      );

      console.log("Emoji Sequence: ", emojiSequence);

      const createdAt = new Date().toISOString();

      try {
        const storyData = {
          emojiSequence,
          id,
          authorNickName: nickname,
          createdAt,
        };

        const result = await createStory(storyData);
        console.log(result.story.emojiSequence);
        navigate("/story-display", {
          state: {
            translation: result.story.translation,
            nickname,
            emojiSequence,
          },
        });
      } catch (error) {
        console.error("Error submitting story:", error);
        alert(error.message || "An error occurred while submitting the story.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div
      className="create-story-page"
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        className="create-story-container"
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
          Create Story
        </h2>

        {/* Display Nickname */}
        <p
          style={{
            color: "#fff",
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Welcome, {nickname}!
        </p>

        {/* Story Textarea with validation */}
        <textarea
          placeholder="Write your story here..."
          value={story}
          onChange={handleStoryChange}
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: isValid ? "1px solid #ccc" : "1px solid red", 
            backgroundColor: "#222",
            color: "#fff",
          }}
        />

        {/* Emoji Picker Button */}
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          style={{
            backgroundColor: "#444",
            color: "#fff",
            padding: "10px",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          😊
        </button>
        {showEmojiPicker && (
          <div style={{ position: "absolute", zIndex: 2 }}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <button
          onClick={handleSubmit}
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
          Submit Story
        </button>
      </div>
    </div>
  );
};

export default CreateStoryPage;
