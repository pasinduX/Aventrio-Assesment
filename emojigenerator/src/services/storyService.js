import axios from "axios";

const API_URL = "http://localhost:5000";

export const createStory = async ({
  emojiSequence,
  id,
  authorNickName,
  createdAt,
}) => {
  try {
    const response = await axios.post(`${API_URL}/api/Stories/create`, {
      emojiSequence, 
      id,
      authorNickName,
      createdAt,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error creating story.");
  }
};

export const getAllStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/Stories/get`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error fetching stories.");
  }
};
