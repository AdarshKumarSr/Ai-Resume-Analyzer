# AI Resume Analyzer

An AI-powered resume analysis platform that evaluates resumes and generates structured feedback including ATS score, tone and style analysis, content quality evaluation, resume structure insights, and skill relevance.

The application is built using **React Router + Vite + TypeScript** on the frontend, while **Puter.js** is used for authentication, cloud storage, and AI processing. Users can upload their resume and instantly receive AI-generated feedback with actionable improvement suggestions.

Live Demo  
https://ai-resume-analyzer-x3fn.onrender.com/

---

# Features

### AI Resume Analysis
Upload a resume and receive detailed AI-generated feedback.

### ATS Score Estimation
Evaluates how well the resume performs against common Applicant Tracking System standards.

### Tone and Style Analysis
Analyzes the professionalism, clarity, and readability of the resume.

### Content Quality Review
Identifies weak descriptions and suggests improvements.

### Resume Structure Evaluation
Checks formatting, section ordering, and overall readability.

### Skill Relevance Detection
Highlights detected skills and evaluates their relevance.

### Secure Authentication
Authentication is handled using **Puter.js**.

### Cloud Storage
Resume files are securely stored using Puter cloud storage.

### Instant Feedback
Results are generated immediately after uploading a resume.

---

# Tech Stack

### Frontend
React  
React Router  
Vite  
TypeScript  
Tailwind CSS

### AI & Backend Services
Puter.js  
AI Processing  
Authentication  
Cloud Storage

### Deployment
Render

---

# Project Structure

```
AI-Resume-Analyzer
│
├── app
│   ├── components        # Reusable UI components
│   ├── constants         # Static configuration and constants
│   ├── lib               # Utility functions and Puter integrations
│   ├── routes            # Application route pages
│   ├── app.css           # Global styles
│   ├── root.tsx          # Root layout component
│   └── routes.ts         # Route configuration
│
├── public                # Static assets
│
├── types                 # Global TypeScript types
│
├── react-router.config.ts
├── vite.config.ts
├── tsconfig.json
├── Dockerfile
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# How It Works

1. User authenticates using Puter authentication.
2. User uploads a resume file.
3. The resume is processed using Puter cloud services.
4. AI analyzes the resume and generates structured insights.
5. The platform displays feedback including:
   - ATS score
   - Content quality analysis
   - Tone and style feedback
   - Skills detected
   - Improvement suggestions

---

# Installation

Clone the repository

```
git clone https://github.com/AdarshKumarSr/Ai-Resume-Analyzer.git
```

Navigate into the project

```
cd Ai-Resume-Analyzer
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

# Environment Setup

The project relies on **Puter.js** services for authentication, storage, and AI processing.

Ensure that Puter services are properly configured before running the project.

---

# Future Improvements

- Job description matching
- Resume optimization suggestions
- Advanced ATS scoring algorithm
- Multiple resume comparison
- Export analyzed resume reports

---

# Author

Adarsh Kumar

GitHub  
https://github.com/AdarshKumarSr

Portfolio
https://adarsh3e8.in/
