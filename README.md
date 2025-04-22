# 🧠 bcknd_Quora_REST API


A simple Quora-like post sharing backend app using **Node.js**, **Express**, and **EJS**. Users can create, view, edit, and delete posts. Frontend is styled using custom CSS.

## 📁 Project Structure

bcknd_Quora/ │ ├── public/ │ ├── editstyle.css │ ├── newstyle.css │ ├── showstyle.css │ └── style.css │ ├── views/ │ ├── edit.ejs │ ├── index.ejs │ ├── new.ejs │ └── show.ejs │ ├── index.js └── README.md

markdown
Copy
Edit

## 🚀 Features

- 📜 View all posts
- ➕ Create a new post
- ✏️ Edit an existing post
- ❌ Delete a post
- 🌐 Styled using clean CSS
- 🧠 Posts are stored in memory

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **EJS Templating Engine**
- **Method Override (for PUT/PATCH/DELETE support)**
- **uuid** (for unique IDs)
- **HTML/CSS**

## 📸 Screens Overview

- `/posts` → List of all posts
- `/posts/new` → Form to create a new post
- `/posts/:id` → Detailed view of a post
- `/posts/:id/edit` → Edit post form

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/bcknd_Quora.git
Install dependencies:
npm install

Run the app:
node index.js

Open in browser:
http://localhost:8080/posts
🔧 Notes
Data is stored in-memory and will reset on every server restart.

Great for learning CRUD operations with Express and templating using EJS.

✍️ Author
Made by Ritviz Tiwari 😎
