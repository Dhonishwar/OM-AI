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

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are OM, a friendly, helpful AI assistant. Answer clearly and naturally."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
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
