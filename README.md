# React + Vite

# Posts Viewer Application

A simple React.js application that fetches and displays posts from a public API. Users can search and filter posts and view detailed information about each post. The app is styled with Tailwind CSS and features clean, modern, and responsive design.

---

## Features

- Fetch posts from the JSONPlaceholder API.
- Search posts by title using a dynamic search bar.
- View detailed information about a specific post on a separate page.
- Pagination for better navigation through posts.
- Responsive and modern UI using Tailwind CSS.
- Routing implemented with `react-router-dom`.

---

## Demo

Website Live : https://displaydats.netlify.app/

---

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevAshu009/React_Intern_Assignment

 
Navigate to the project directory:
Install dependencies:
  npm install
Start the development server:
  npm run dev
Open in your browser:
Go to http://localhost:5173/ to view the application.
API Used
This project uses the JSONPlaceholder API, a free REST API for testing and prototyping.

Endpoint used: /posts
Project Structure

React_Intern_Assignment/
├── src/
│   ├── pages/
│   │   ├── Home.jsx        # Home page displaying list of posts
│   │   ├── Details.jsx     # Details page for a single post
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
Usage
Home Page: Displays a paginated list of posts with a search bar to filter posts by title.
Post Details Page: Click "Read More" on any post to view detailed information about it.
Pagination: Navigate between pages using "Previous" and "Next" buttons.

![Screenshot 2025-02-20 095007](https://github.com/user-attachments/assets/714da011-62b3-485e-a2af-ae1bf6b9ef8a)

![Screenshot 2025-02-20 095031](https://github.com/user-attachments/assets/db1fbe6b-5a95-45a6-84ba-a0cdfeb5c0b1)
![Screenshot 2025-02-20 095048](https://github.com/user-attachments/assets/7c10a5bd-fc5f-4d46-8210-9920503fab1f)

