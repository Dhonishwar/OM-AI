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


## 🧪 Testing

| Test Case | Input | Expected Result | Status |
|---|---|---|---|
| Basic chat | `Hello OM` | OM returns a natural response | ✅ Pass |
| Mathematics | `What is 2 + 2?` | OM returns `4` | ✅ Pass |
| Voice input | Speak a question | Speech is converted to text | ✅ Pass |
| Voice response | Ask OM a question | OM speaks the response | ✅ Pass |
| Memory | `Remember that my favorite color is blue` | Fact is saved | ✅ Pass |
| Memory retrieval | `What do you remember?` | Saved memory is displayed | ✅ Pass |
| Empty message | Send an empty request | Backend returns an error | ✅ Pass |
| Production deployment | Open the Render URL | OM loads and responds online | ✅ Pass |


## 🔐 Security

OM follows basic security practices for API-based applications:

- The OpenAI API key is stored in environment variables.
- API credentials are never included in frontend JavaScript.
- The `.env` file must not be committed to GitHub.
- Production secrets are stored using Render environment variables.
- The backend validates incoming chat requests before sending them to the AI service.

> **Note:** This project is an educational/internship project and should receive additional security hardening before production use at scale.

## Project Objectives

- Build a practical AI assistant using an API-based architecture.
- Learn frontend and backend integration.
- Implement text and voice interaction.
- Practice secure API credential handling.
- Deploy a real application online.
- Demonstrate a complete internship portfolio project.

## 🚀 Future Scope

Future versions of OM can include:

- Persistent cloud-based memory
- Database integration
- File and document analysis
- Web search capabilities
- Task and reminder management
- Multi-language voice support
- Advanced authentication and authorization
- Synchronized conversation history
- Usage analytics and monitoring
- Integration with additional AI tools and services

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
