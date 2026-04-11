# Quick-AI

Quick-AI is a web application that brings multiple AI tools together in one place. It includes features for writing content, generating and editing images, and reviewing resumes. We built this using a React frontend and a Node.js/Express backend, backed by a Neon Postgres database for data storage.

[![Live Demo](https://img.shields.io/badge/Live_Demo-quick--ai--tawny.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://quick-ai-tawny.vercel.app/)

## What it does

The platform is set up with both free and premium access levels to handle different types of tools. 

Core tools included:
- Text Generation: Instantly draft articles or come up with blog titles.
- Image Generation: Create custom images from text prompts.
- Image Editing: Remove backgrounds or erase specific objects from existing photos.
- Resume Review: Upload a PDF resume and get targeted feedback on how to improve it.
- Community Gallery: Publish your generated images to a public feed where other users can like them.

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express 5
- Auth & User Management: Clerk
- Database: Neon Postgres
- Integrations: 
  - Gemini (for text generation and resume review)
  - ClipDrop (for image generation)
  - Cloudinary (for image hosting and object/background removal)
- Hosting: Vercel

## Folder Structure

```text
Quick-AI/
├── client/                # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # React components, pages, and context
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable UI elements
│   │   └── pages/         # Full page views
│   └── package.json       # Frontend dependencies
└── server/                # Express backend API
    ├── configs/           # Database and API configurations
    ├── controllers/       # Core application and AI logic
    ├── middlewares/       # Authentication and file parsers
    ├── routes/            # API endpoints definition
    ├── server.js          # Entry point for backend
    └── package.json       # Backend dependencies
```

## Running it locally

You will need Node.js installed, along with accounts for Clerk, Neon Postgres, Cloudinary, Gemini, and ClipDrop.

1. Clone the project to your local machine:
```bash
git clone https://github.com/Abhay-0103/Quick-AI.git
cd Quick-AI
```

2. Install the necessary packages for both the client and the server:
```bash
cd client
npm install
cd ../server
npm install
```

3. Set up the environment variables. You need a `.env` file in the `client/` folder and another `.env` file in the `server/` folder.

**client/.env**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

**server/.env**
```env
PORT=3000
DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key

GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start both development servers in separate terminal windows.

For the backend:
```bash
cd server
npm run server
```

For the frontend:
```bash
cd client
npm run dev
```

Visit the local address provided by Vite (usually http://localhost:5173) in your browser.

## API Overview

The backend uses `/api` as the base address. All routes require an active Clerk session.

- Tools:
  - `POST /api/ai/generate-article`
  - `POST /api/ai/generate-blog-title`
  - `POST /api/ai/generate-image`
  - `POST /api/ai/remove-image-background` (expects an image file)
  - `POST /api/ai/remove-image-object` (expects an image file and the object name)
  - `POST /api/ai/resume-review` (expects a PDF file)

- User actions:
  - `GET /api/user/get-user-creations`
  - `GET /api/user/get-published-creations`
  - `POST /api/user/toggle-like-creation`

## Permissions

- Free tier: Users get a set number of free uses for the text-based tools.
- Premium tier: Users who upgrade get access to the image tools and resume reviewer.
- The system checks your current plan status through Clerk metadata on every request.

## Contributing

If you want to add something or fix a bug, feel free to open a pull request. Make sure to clearly describe what your changes do.

## License

This project is open-source and available under the MIT License. See the LICENSE file for more details.

