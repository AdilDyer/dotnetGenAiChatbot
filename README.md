# 🧠 GeminiAI ChatBot (.NET + React)

A full-stack Generative AI chatbot application built using **ASP.NET Core Web API** and a **React frontend**, powered by **Google Gemini Pro (2.0 Flash)**. This project demonstrates a ASP.NET integration of backend AI capabilities with a modern client-side interface.

---

## 📌 Project Summary

This chatbot app allows users to input prompts via a chat interface. These prompts are processed using Google’s Gemini AI API, and the chatbot responds with intelligent, contextual replies.

> Developed by: **Adil Dyer**
> Enrollment No: **04**
> Course: **BTech CSE, Semester 4** (2023–2028)
> Project: `.NET Teaching Assistant 2 (TA2)`

---

## 🚀 Features

- 🌐 **ASP.NET Core** API backend using HttpClient
- 🤖 Integrated with **Gemini 2.0 Flash** via REST API
- ⚛️ **React.js** frontend with real-time message display
- ✍️ Supports **Markdown-formatted AI responses**
- 📡 Asynchronous chat and message handling
- 🧪 Simple and elegant UI design for testing and demonstration

---

## 🏗️ Technologies Used

| Tech             | Description                        |
|------------------|------------------------------------|
| ASP.NET Core     | Backend API built with C#          |
| HttpClient       | For sending POST requests to Gemini |
| Newtonsoft.Json  | For JSON serialization/deserialization |
| React.js         | Interactive UI framework           |
| Axios            | Client-side API calls              |
| marked           | Markdown parser for AI responses   |

---

## 🔧 Setup & Installation

### 🖥️ Backend (ASP.NET Core API)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AdilDyer/dotnetGenAiChatbot.git
   cd dotnetGenAiChatbot

2. **Add a Gemini-Ai Api Key in Controller**

> Visit https://ai.google.dev

> Sign-In and Get your Api-Key

> Paste the Api-Key at 'API_KEY' field at aichatdotnet->Controllers->GeminiAiController.cs

3. **Start The Backend**
   ```bash
   cd aichatdotnet
   dotnet build
   dotnet run

4. **Start The Frontend in new Terminal**
   ```bash
   cd nextdotnetfrontend
   npm install
   npm run dev

#### The React app will launch at: http://localhost:3000

---

## 📺 Demo UI Overview

- Users type a prompt in the chat bar.
- Message is sent via axios to the backend API.
- Gemini's response is displayed with Markdown support (using marked).
- Loading indicator shows "AI is thinking..." during processing.

---

## 📸 Screenshots

![Alt text](https://res.cloudinary.com/ddxv0iwcs/image/upload/v1744555724/Screenshot_2025-04-13_at_8.18.35_PM_vf6xsn.png "Optional title")

---

## 🙏 Acknowledgements

Huge Thanks to Dr. Raviraj Vaghela sir for providing me the opportunity to be working on this exciting project ! It was a lot of learning and patience involved in this and i am sincerely grateful after making some progress over it. 🥰
