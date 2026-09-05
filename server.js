const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const port = 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/OM_AI_voice_mobile_FINAL.html");
});

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
    console.error(error);

    res.status(500).json({
      error: "OM could not connect to the AI."
    });
  }
});

app.listen(port, () => {
  console.log(`OM is running at http://localhost:${port}`);
});