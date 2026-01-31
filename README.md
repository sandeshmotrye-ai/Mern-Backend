# Day3-backend-db

Simple Node + Express + MongoDB server for tasks.

## Setup

1. Copy `.env.example` to `.env` and fill in values:

   ```env
   MONGO_URI=mongodb://localhost:27017/tasksdb
   PORT=5000
   ```

2. Install dependencies and start:

   ```bash
   npm install
   npm start
   ```

3. API endpoints (base: `http://localhost:5000`):
   - GET `/tasks` - list all tasks
   - POST `/tasks` - add new task (JSON body: `{ "title": "..." }`)

Test with Postman or the frontend app.
