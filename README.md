# AnswersAi Backend

This is the backend service for Answersai, built with Node.js and Express.js. It provides functionalities such as user authentication, question handling, and integration with AI services for generating answers.

## Prerequisites

- Node.js
- npm
- Docker (optional)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/answersai-backend.git
cd answersai-backend
```

### Setup Environment Variables

Create a .env file in the root directory and add the following environment variables:
```
DATABASE_URL=postgres://username:password@localhost:5432/mydatabase
JWT_SECRET=your_jwt_secret
```

## Build and Run with Docker

### Build Docker Image
```
docker build -t answersai-backend .
```

### Run Docker Container
```
docker run -p 3000:3000 --env-file .env answersai-backend
```

The backend service will be available at port 3000 of the machine.
