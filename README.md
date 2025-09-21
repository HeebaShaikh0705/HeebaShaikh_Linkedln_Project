# LinkedIn Clone

A simple LinkedIn-like webpage built with Next.js, featuring a responsive design with header, footer, content area, and interactive like/share functionality.

## Features

- ✅ Responsive header with LinkedIn-style logo
- ✅ Footer with copyright information
- ✅ Main content area with short description
- ✅ 4 placeholder images in a grid layout
- ✅ Like and Share buttons with functionality
- ✅ API endpoint to capture like actions
- ✅ Modern, clean UI design

## Tech Stack

- **Frontend**: Next.js 14 with React
- **Backend**: Next.js API Routes (Node.js)
- **Styling**: CSS with responsive design
- **Deployment**: Vercel (ready)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── like/
│   │       └── route.js          # API endpoint for likes
│   ├── components/
│   │   ├── Header.js             # Header component
│   │   └── Footer.js             # Footer component
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Main page component
├── package.json
├── next.config.js
└── README.md
```

## API Endpoints

- `POST /api/like` - Captures like button clicks and logs them to console

## Deployment

This project is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

## Next Steps

To complete the assignment, you'll need to:
1. Set up MongoDB connection
2. Store like data in the database
3. Deploy to Vercel
4. Upload to GitHub
"# HeebaShaikh_Linkedln_Project" 
"# HeebaShaikh_Linkedln_Project" 
