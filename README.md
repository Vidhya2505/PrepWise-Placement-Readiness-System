🚀 PrepWise — Placement Readiness System
An AI-powered full-stack platform that helps students and job seekers prepare for interviews through resume analysis, mock interviews, and personalized feedback.

📌 Overview
PrepWise is designed to simulate real interview environments and provide actionable insights to improve performance. It combines AI, analytics, and structured feedback to enhance interview readiness.

🛠️ Tech Stack
Layer	Technology
Frontend	React 18, TypeScript, Vite, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas (Mongoose)
AI Engine	Groq API (LLaMA 3.3 70B)
Auth	JWT Authentication
PDF Parsing	pdfjs-dist
Rate Limit	express-rate-limit
✨ Features
📄 Resume Analysis
Upload PDF/TXT resumes
ATS score generation
Keyword gap detection
Section-wise feedback
Resume improvement suggestions
🎤 Mock Interviews
AI-generated questions based on resume

Covers:

HR
Technical
Behavioral
Project
DSA
Real interview simulation

🧠 Answer Coaching
AI evaluates responses
Filler word detection
STAR method validation
Improved answer suggestions
Recruiter-style feedback
📊 Interview Analytics
Readiness score
Performance tracking
Streak monitoring
Round-wise breakdown
📉 Skill Gap Analysis
Identifies weak areas
Based on interview performance history
🌐 Portfolio Generator
Generates portfolio from resume

Includes:

About section
Skills
Projects
Experience
Export as single HTML file

🤖 PrepBot (AI Chatbot)
Personalized interview assistant

Helps with:

DSA
System Design
Resume tips
Behavioral questions
Maintains chat history

🎨 UI Features
Dark / Light mode
Clean and responsive UI
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/prepwise.git
cd prepwise
2️⃣ Backend Setup
cd prepwise-backend
npm install
cp .env.example .env
Update .env:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GROQ_API_KEY=your_api_key
Run backend:

npm run dev
3️⃣ Frontend Setup
cd prepwise-frontend
npm install
npm run dev
4️⃣ Run Application
Frontend → http://localhost:5173
Backend → http://localhost:5000
📂 Project Structure
prepwise/
├── prepwise-backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── prepwise-frontend/
    ├── pages/
    ├── components/
    ├── context/
    └── services/
🔐 Authentication
JWT-based authentication
Secure login & signup
Protected routes
🚧 Future Enhancements
PDF report generation
Real-time emotion detection
Resume file storage (S3/GridFS)
Career role recommendations
💡 Use Case
Students preparing for placements
Job seekers improving interview skills
Anyone wanting AI-based career guidance
👩‍💻 Author
Tejasree Komma , G.Keerti , N.Sri Vidhya

⭐ Contributing
Contributions are welcome! Feel free to fork the repo and submit a PR.

📜 License
This project is for educational purposes.

