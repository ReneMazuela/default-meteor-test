import axios from "axios";
import { Meteor } from "meteor/meteor";

export const fetchOpenAICode = async (prompt) => {
  const apiKey = Meteor.settings?.public?.openaiApiKey;

  if (!apiKey) {
    console.error("[ENV ERROR] OpenAI API key missing.");
    throw new Error("Missing OpenAI API Key");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("[API ERROR]", error?.response?.data || error.message);
    throw error;
  }
};
