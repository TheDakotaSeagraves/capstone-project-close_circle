# Close Circle
 
A friends and family social app where people can share life updates, view wishlists, send holiday cards, and create shared memories together.
 
## Overview
 
Close Circle is a **React-based frontend application** designed to help families and friend groups stay connected by sharing life moments in one organized place. Whether it's celebrating milestones, organizing memories by events, or staying updated with loved ones throughout the year, Close Circle makes it easy to document and cherish life's important moments together.
 
Built with React 19, Vite, and Tailwind CSS, this project demonstrates modern frontend development practices including component-based architecture, client-side routing, and RESTful API integration using JSON Server as a mock backend.
 
## Features
 
### ✅ Fully Implemented
- **User Authentication** - Secure registration and login system with email validation
- **Post Management (CRUD)** - Create, read, update, and delete posts with titles, descriptions, and categories
- **User Profiles** - Customizable user profiles with profile photos, bio sections, and background color personalization
- **Category Organization** - Posts organized by categories (Travel, Family, Hobbies, Food, Events)
- **Post Browsing** - View all posts in a responsive grid/flex layout with post metadata (title, category, date)
- **Responsive Design** - Mobile-friendly interface built with Tailwind CSS utility classes
- **Client-Side Routing** - Multi-page navigation using React Router DOM
 
### 🚧 In Progress / Partially Implemented
- **Wishlists** - Database schema designed; component structure ready
- **Holiday Cards** - Feature concept designed; email list infrastructure in place
- **Event Tags/Shared Memories** - Database relationships established; UI components pending
- **Likes on Posts** - Database structure ready; like/unlike interaction pending
- **Guestbook Messages** - Backend schema designed; frontend implementation in progress
 
### 📝 Project Status
This is an active learning project as part of Nashville Software School. Core functionality including user authentication and post CRUD operations are fully implemented and functional. The application demonstrates proficiency with modern React patterns including hooks, component-based architecture, client-side routing, and REST API integration. Additional features are being developed as part of continued learning with NSS.
 
## Tech Stack
 
**Frontend:**
- React 19.2.0
- Vite (build tool & dev server)
- Tailwind CSS (utility-first CSS framework)
- React Router DOM 7.13.0 (client-side routing)
 
**Development & Testing:**
- JSON Server (mock REST API for development)
- Fetch API (HTTP requests)
- ESLint (code quality)
- npm (package management)
- Git & GitHub
 
## Installation & Setup
 
### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Git
- A code editor (VS Code recommended)
 
### Getting Started
 
1. **Clone the repository**
   ```bash
   git clone https://github.com/TheDakotaSeagraves/close-circle.git
   cd close-circle
   ```
 
2. **Install dependencies**
   ```bash
   npm install
   ```
 
3. **Start JSON Server (mock backend)** - Run in one terminal
   ```bash
   npm run server
   ```
   This will start the mock API server at `http://localhost:8088`
 
4. **Start the development server** - Run in another terminal
   ```bash
   npm run dev
   ```
 
5. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`
   - Register a new account or log in
   - Start creating posts!
 
### Available Scripts
- `npm run dev` - Start the development server with hot module reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run server` - Start the JSON Server mock backend
- `npm run lint` - Run ESLint to check code quality
 
## Project Structure
 
```
close-circle/
├── src/
│   ├── components/
│   │   ├── auth/              # Login & Register components
│   │   ├── Nav/               # Navigation bar
│   │   └── posts/             # Post-related components
│   ├── services/              # API service functions
│   │   ├── postService.js
│   │   ├── userService.js
│   │   └── categoryService.js
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── index.css              # CSS variables & base styles
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── database.json              # JSON Server mock database
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies & scripts
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```
 
## How to Use
 
### User Authentication
1. Navigate to the login page or registration page
2. **To Register:** Enter your name and email address to create a new account
3. **To Login:** Enter your email address to access your account
4. Once logged in, you're taken to the home feed
 
### Creating a Post
1. From the home page, look for the "New Post" or "Post" button in the navigation
2. Fill in the post details:
   - Title (required)
   - Description/Body (required)
   - Select a Category (Travel, Family, Hobbies, Food, or Events)
   - Optionally add a cover photo URL
3. Click "Create Post"
4. Your post appears in the feed and on your profile
 
### Viewing & Managing Posts
1. **Home Feed** - View all posts in a grid layout with titles, categories, and dates
2. **Post Details** - Click a post to see full content
3. **Edit Post** - Click edit button to modify post information
4. **Delete Post** - Remove a post with the delete option (typically requires confirmation)
 
### User Profile
- View your profile information (name, email, bio, profile photo)
- See all your posts organized on your profile
- Edit your profile details from the sidebar
 
## Key Learnings & Accomplishments
 
- **Built a complete React application** using modern React patterns (hooks, functional components, context)
- **Implemented user authentication** with registration, login, and session management using localStorage
- **Created CRUD operations** for posts (Create, Read, Update, Delete) with full REST API integration
- **Developed responsive UI** with Tailwind CSS utility classes for mobile and desktop views
- **Set up client-side routing** with React Router DOM for multi-page navigation
- **Integrated with mock backend** using JSON Server and Fetch API for seamless data persistence
- **Organized code structure** with component-based architecture and separate service files for API calls
- **Implemented form validation** for user input during registration and post creation
- **Managed application state** effectively across multiple components using React hooks
 
## Challenges & Solutions
 
- **State Management Across Components:** Managing user authentication state across the entire application required implementing proper context and using localStorage for persistence. Solved by creating a centralized authentication check in the Authorized component and using React Router's protected routes pattern.
 
- **Form Validation & Error Handling:** Ensuring proper form validation during registration and login while providing clear user feedback. Implemented validation checks before API calls and displayed appropriate success/error messages to the user.
 
- **API Integration with Mock Backend:** Coordinating between the React frontend and JSON Server mock backend required careful attention to API endpoint structure and request formatting. Solved by creating service files (postService.js, userService.js) that centralize all API calls and handle data transformation.
 
- **Responsive Design:** Ensuring the application looks good on different screen sizes while maintaining functionality. Used Tailwind's responsive utility classes (breakpoints) and flexbox/grid layouts for adaptive design.
 
## Future Enhancements
 
- **Like/Unlike Posts** - Add functionality for users to like posts and see like counts
- **Guestbook Messages** - Allow users to leave messages on each other's profiles
- **Event Tags** - Tag posts with events and filter by event
- **Wishlists** - Implement wishlist creation and sharing features
- **Image Upload** - Replace photo URL inputs with direct image upload capability
- **Search & Filter** - Add search functionality and advanced filtering options
- **User Following** - Implement follow/unfollow system to create custom feeds
- **Comments** - Add comment threads to posts for discussion
- **Notifications** - Real-time notifications for post interactions
- **Dark Mode** - Theme toggle for dark/light mode support
 
## Contributing
 
This is a capstone project. For questions or feedback, please reach out directly.
 
## License
 
This project is for educational purposes as part of the Nashville Software School capstone project.
 
## Contact & Portfolio
 
- **GitHub:** https://github.com/TheDakotaSeagraves
- **LinkedIn:** https://www.linkedin.com/in/dakota-seagraves
 
---
 
**Project Status:** Completed as part of Nashville Software School capstone project (2026)
