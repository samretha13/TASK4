# Quote Generator with History 📜

A full-stack web application that fetches random quotes from an external API and stores quote history in MongoDB.

---

## Features

- Fetch random quotes from API
- Display quote and author
- Save quote history in database
- View previously fetched quotes
- REST API integration

---

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### External API
- Quotable API

---

## Project Structure

quote-generator/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── models/
│       └── Quote.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js

---

## Installation

### Backend Setup

```bash
cd backend
npm install
node server.js
