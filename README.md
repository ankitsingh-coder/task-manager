# Mini Task Manager App

## Overview
This project is a simple full-stack Task Manager application built as part of the ZoraDev Full Stack Developer Intern selection task.

The application allows users to add, view, and delete tasks. The focus of this project is on clean implementation, working functionality, and proper frontend-backend integration.

---

## Features
- Add a new task
- View all tasks
- Delete a task
- Simple and clean user interface

---

## Tech Stack
- Frontend: React
- Backend: Node.js with Express
- Storage: In-memory (JavaScript array)

---

## API Endpoints

- GET /tasks  
  Returns all tasks

- POST /tasks  
  Creates a new task

- DELETE /tasks/:id  
  Deletes a task by ID

---

## Frontend-Backend Integration

- Tasks are fetched from the backend API on page load  
- New tasks are added via API calls  
- Tasks are deleted using API calls  
- No local-only state is used for core functionality  

---

## Folder Structure

task-manager/

│
├── Backend/  
│   └── index.js (Express server with API endpoints)
│
├── task-app/  
│   ├── src/  
│   ├── public/  
│   └── package.json  
│
└── package.json

---

## How to Run Locally

### 1. Clone the repository

git clone https://github.com/ankitsingh-coder/task-manager

cd task-manager

### 2. Run Backend

cd Backend

npm install

node index.js

### 3. Run Frontend

cd task-app

npm install

npm start

---

## Assumptions and Decisions

- In-memory storage is used as per the assignment requirement (no database)
- Focus was kept on functionality and clean structure instead of adding unnecessary features
- UI is intentionally simple and readable
- Only required APIs are implemented as specified in the task

---

## Notes

- Data will reset when the backend server restarts
- This project is built specifically for evaluation purposes

---

## Live Application

Frontend: https://task-manager-omega-cyan-86.vercel.app/

Backend: https://task-manager-u6dl.onrender.com

---

## Submission

This project was completed as part of the ZoraDev Full Stack Developer Intern selection task.
