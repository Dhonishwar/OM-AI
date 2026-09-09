const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/OM_AI_voice_mobile_FINAL.html");
});

// AI chat
app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "No message was provided."
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions:
        "You are OM, a friendly, helpful AI assistant. Answer clearly and naturally.",
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error("OpenAI error:", error);

    res.status(500).json({
      error: "OM could not connect to the AI."
    });
  }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`OM is running on port ${PORT}`);
});
