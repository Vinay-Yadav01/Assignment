# HR Management System

A modern HR management system built with React and shadcn/ui components. This application provides a comprehensive solution for managing employees, tracking applications, and handling HR-related tasks.

## Prerequisites

- Node.js 18+ and npm
- Git
- Windows, macOS, or Linux

## Quick Start

1. **Clone the Repository**

```cmd
git clone <YOUR_REPOSITORY_URL>
cd Assignment
```

2. **Install Dependencies**

```cmd
npm install
```

3. **Start Development Server**

```cmd
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/    # Reusable UI components
│   ├── ui/       # shadcn/ui components
│   └── dashboard/ # Dashboard-specific components
├── context/      # React context providers
├── hooks/        # Custom React hooks
├── lib/          # Utility functions
└── pages/        # Route components
```

## Features

- 🔐 User Authentication
- 📊 Dashboard Analytics
- 👥 Employee Management
- 💼 Job Applications Tracking
- 💰 Payroll Management
- 🎨 Modern UI with shadcn/ui
- 🎯 Protected Routes

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Query
- **Toast Notifications**: Sonner
- **Form Handling**: React Hook Form

## Development

To contribute to this project:

1. Create a new branch

```cmd
git checkout -b feature/your-feature-name
```

2. Make your changes and commit

```cmd
git add .
git commit -m "Description of changes"
```

3. Push changes and create a pull request

```cmd
git push origin feature/your-feature-name
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

## Deployments

The application is deployed and accessible at the following URLs:

- [Production](https://assignment-three-flax.vercel.app/)
- [Development](https://assignment-git-main-vinay-yadavs-projects-0ac6c50a.vercel.app/)
- [Preview](https://assignment-cea6fzbgq-vinay-yadavs-projects-0ac6c50a.vercel.app/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
