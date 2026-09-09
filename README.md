# OM AI Assistant 🤖

OM is a web-based AI assistant with a mobile-friendly conversational interface. It uses a Node.js/Express backend to securely communicate with the OpenAI API.

## Features

- 💬 OpenAI-powered chat
- 🎙️ Voice input and voice responses
- 🔄 Hands-free voice conversation
- 🧠 Simple personal memory for saved facts
- 📱 Responsive mobile-friendly interface
- 🔐 Server-side API key protection
- 🌐 Public cloud deployment with Render

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| AI | OpenAI API |
| Configuration | dotenv |
| Deployment | Render |
| Version Control | GitHub |

## Architecture

```text
User
  ↓
OM Web Interface
(HTML + CSS + JavaScript)
  ↓ POST /api/chat
Node.js + Express
  ↓
OpenAI API
  ↓
AI Response
  ↓
OM Web Interface
```
![OM-AI Architecture](architecture.png)

## Project Structure

```text
OM-AI/
├── OM_AI_voice_mobile_FINAL.html
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

> `.env` is used locally for the OpenAI API key and must never be committed to GitHub.

## How It Works

1. The user opens OM in a browser.
2. The user enters a message or uses voice input.
3. The frontend sends the message to `/api/chat`.
4. Express receives the request.
5. The backend sends it to the OpenAI API.
6. The AI response is returned to the frontend.
7. OM displays the response and can speak it when voice mode is used.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Dhonishwar/OM-AI.git
cd OM-AI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

```env
OPENAI_API_KEY=your_api_key_here
```

Never share or commit your API key.

### 4. Start the application

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Deployment

OM can be deployed as a Node.js web service on Render.

1. Connect the GitHub repository to Render.
2. Configure the project as a Node.js service.
3. Add `OPENAI_API_KEY` as a Render environment variable.
4. Deploy the service.
5. Open the public Render URL.

The API key stays on the server rather than in the frontend.

## Testing

| Test | Expected Result |
|---|---|
| `Hello OM` | OM returns a response |
| `What is 2 + 2?` | OM returns `4` |
| Voice input | Speech becomes a message |
| Voice response | OM speaks the response |
| Remember a fact | The fact is stored |
| `What do you remember?` | Saved memories are reported |
| Empty message | Backend returns an error |

## Security

- Store the OpenAI API key in environment variables.
- Never put the API key in frontend JavaScript.
- Never upload `.env` to GitHub.
- Use Render environment variables for production secrets.

## Project Objectives

- Build a practical AI assistant using an API-based architecture.
- Learn frontend and backend integration.
- Implement text and voice interaction.
- Practice secure API credential handling.
- Deploy a real application online.
- Demonstrate a complete internship portfolio project.

## Future Scope

- Persistent cloud-based memory
- Database integration
- File/document analysis
- Web search
- Tasks and reminders
- Multi-language voice support
- Stronger authentication
- Synchronized conversation history
- Usage analytics
- Additional AI tools and integrations

## Internship Value

OM demonstrates practical experience with:

- Frontend development
- Backend API development
- REST-style request handling
- OpenAI API integration
- Environment-variable configuration
- Voice-enabled web interfaces
- GitHub version control
- Cloud deployment
- Application security
- Software testing and documentation

## Author

**Dhonishwar**

OM AI Assistant — an internship-focused AI application project.

## License

This project is intended for educational and portfolio use.
