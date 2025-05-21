import React, { useState } from "react";
import { fetchOpenAICode } from "../lib/openai"; // adjust path as needed

export default function CodePrompt() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = async () => {
    try {
      const result = await fetchOpenAICode(prompt);
      setOutput(result);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
      />
      <button onClick={handleClick}>Generate</button>
      <pre>{output}</pre>
    </div>
  );
}
