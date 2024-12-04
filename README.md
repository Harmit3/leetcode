# LeetCode Clone

A web application that mimics LeetCode's functionality, allowing users to practice coding challenges and prepare for technical interviews.

## Features

- User authentication
- Problem list with difficulty levels and categories
- Individual problem pages with descriptions and code editors
- Real-time code execution and testing
- User progress tracking

## Technologies Used

- **React** with **Next.js** for frontend and server-side rendering
- **TypeScript** for type-safe code
- **Tailwind CSS** for responsive and customizable styling
- **Firebase** for authentication and database management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   git clone https://github.com/Harmit3/leetcode.git

2. Navigate to the project directory:
cd leetcode

3. Install dependencies:
npm install

4. Set up Firebase:
Create a Firebase project.
Add a web app to your Firebase project.
Copy the Firebase configuration.

5. Create a .env.local file in the root directory and add your Firebase config:
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


6. Run the development server:
npm run dev

7. Open http://localhost:3000 in your browser to see the application.

Usage:
Sign up for an account or log in.
Browse the problem list.
Select a problem to solve.
Write your solution in the code editor.
Run your code to see if it passes all test cases.
Submit your solution when ready.

Deployment:
This project can be easily deployed to Vercel:
Push your code to a GitHub repository.
Connect your GitHub account to Vercel.
Select the repository and configure your project.
Deploy.


Contributing:
Contributions are welcome! Please feel free to submit a Pull Request.
