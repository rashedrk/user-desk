# User Desk

A modern full-stack user management application with real-time search, filtering, and detailed user views. Built as a demonstration of production-grade React and TypeScript development practices.

## Live Deployment

- **Frontend**: [https://user-desk.up.railway.app/](https://user-desk.up.railway.app/)
- **Backend API**: [https://user-desk-backend-production-d7e0.up.railway.app/](https://user-desk-backend-production-d7e0.up.railway.app/)
- **API Documentation**: [https://app.swaggerhub.com/apis-docs/nan-7ea/user-desk/1.0.0](https://app.swaggerhub.com/apis-docs/nan-7ea/user-desk/1.0.0)

## Features Overview

### Core Features 

- **User List Display** - View all users with name, role badge, and active status
- **Search Functionality** - Real-time search by user name with automatic query cancellation
- **Role Filtering** - Filter users by role (admin/editor/viewer)
- **Sort by Name** - Alphabetically sort users in ascending/descending order
- **User Details View** - Click any user to view detailed information
- **Toggle Active Status** - Update user status with optimistic UI updates
- **Loading States** - Skeleton loaders for better UX during data fetching
- **Responsive Design** - Works seamlessly on desktop and mobile devices


## Tech Stack

### Frontend

- **React 19** with TypeScript
- **Vite** - Lightning-fast build tool
- **React Query (@tanstack/react-query)** - Powerful data fetching and caching
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide Icons** - Modern icon set

### Backend

- **Express 5** - Fast, minimalist web framework
- **TypeScript** - Type-safe backend development
- **Prisma 6.19.2** - Next-generation ORM for MongoDB
- **MongoDB** - NoSQL database
- **Zod** - Schema validation

### Infrastructure

- **PNPM Workspaces** - Monorepo management
- **Railway** - Cloud deployment platform

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **PNPM** (v10.28.1 or higher)
- **MongoDB** (local instance or MongoDB Atlas account)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rashedrk/user-desk
cd user-desk
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

#### Backend Environment Variables

Create `apps/backend/.env`:

```env
# Database
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/user-desk?retryWrites=true&w=majority"

# Server
PORT=3000

# CORS 
CORS_ORIGIN=http://localhost:5173
```

#### Frontend Environment Variables

Create `apps/frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

### 4. Database Setup

```bash
# Navigate to backend directory
cd apps/backend

# Generate Prisma Client
pnpm prisma generate

# Push schema to database
pnpm prisma db push

# Seed database with sample data
```

### 5. Start Development Servers

#### Option A: Run Everything (Recommended)

```bash
# From root directory
pnpm run dev
```

This starts:

- Frontend at [http://localhost:5173](http://localhost:5173)
- Backend at [http://localhost:3000](http://localhost:3000)

#### Option B: Run Separately

```bash
# Terminal 1 - Frontend
pnpm run dev:web

# Terminal 2 - Backend
pnpm run dev:server
```

## Project Structure

```
user-desk/
├── apps/
│   ├── frontend/                 # React Frontend Application
│   │   ├── src/
│   │   │   ├── components/       # React components
│   │   │   │   ├── Home/         # Main dashboard components
│   │   │   │   │   ├── SearchBox/
│   │   │   │   │   ├── UserCard/
│   │   │   │   │   └── UserDetails/
│   │   │   │   ├── Skeleton/     # Loading skeleton components
│   │   │   │   └── ui/           # shadcn/ui components
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── types/            # TypeScript types
│   │   │   ├── utils/            # Utility functions
│   │   │   └── constant/         # Constants
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── backend/                  # Express Backend API
│       ├── src/
│       │   ├── app/
│       │   │   ├── modules/
│       │   │   │   └── user/     # User module
│       │   │   │       ├── user.controller.ts
│       │   │   │       ├── user.services.ts
│       │   │   │       ├── user.routes.ts
│       │   │   │       └── user.interface.ts
│       │   │   ├── middlewares/  # Express middlewares
│       │   │   ├── routes/       # API routes
│       │   │   ├── utils/        # Utility functions
│       │   │   └── lib/          # Libraries (Prisma client)
│       │   └── index.ts          # Entry point
│       ├── prisma/
│       │   └── schema.prisma     # Database schema
│       └── package.json
│
├── packages/
│   ├── config/                   # Shared configuration
│   └── env/                      # Environment configuration
│
├── package.json                  # Root package.json
├── pnpm-workspace.yaml           # PNPM workspace config
└── README.md
```

## API Endpoints

### User Endpoints

#### Get All Users

```
GET /api/v1/users
Query Parameters:
  - search: string (optional) - Search by user name
  - role: "admin" | "editor" | "viewer" (optional) - Filter by role
  - sortBy: "name" (optional) - Sort by field
  - sortOrder: "asc" | "desc" (optional) - Sort order
```

#### Get Single User

```
GET /api/v1/users/:id
```

#### Toggle User Active Status

```
PATCH /api/v1/users/:id/toggle-active
```

### User Model

```typescript
{
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  active: boolean;
  createdAt: Date;
}
```

## Available Scripts

### Root Level

- `pnpm run dev` - Start all applications in development mode
- `pnpm run build` - Build all applications for production
- `pnpm run check-types` - Type-check all packages

### Frontend Specific

- `pnpm run dev:web` - Start frontend development server
- `pnpm --filter web build` - Build frontend for production
- `pnpm --filter web typecheck` - Type-check frontend code

### Backend Specific

- `pnpm run dev:server` - Start backend development server
- `pnpm run build:backend` - Build backend for production
- `pnpm run start:backend` - Start production backend server

## Implementation Status

### Completed Features

#### Core Requirements

- ✅ PNPM Workspace setup
- ✅ React with TypeScript
- ✅ React Query for data fetching
- ✅ Tailwind CSS + shadcn/ui 
- ✅ Express backend with TypeScript
- ✅ MongoDB with Prisma (v6.19.2)
- ✅ User model with all required fields
- ✅ All API endpoints (GET /users, GET /users/:id, PATCH /users/:id/toggle-active)
- ✅ Search functionality with query cancellation
- ✅ Role filtering
- ✅ Sort users by name
- ✅ User details view with loading skeleton

#### Bonus Features

- ✅ Activity indicator showing viewing time
- ✅ Strong TypeScript typing throughout
- ✅ Optimistic updates for toggle active
- ✅ Sort disabled during loading
- ✅ OpenAPI/Swagger documentation


### Not Implemented

- None - All requirements and bonus features are complete

## Design Decisions & Deviations

### Architecture Choices

- **Monorepo with PNPM Workspaces**: Used as specified, scaffolded with better-t-stack.dev
- **Express over Others**: Chosen Express for simplicity and lightweight implementation. All requirements are met without the overhead of a larger framework.
- **Component Structure**: Organized components by feature (Home/) rather than by type for better scalability
- **Custom Hooks**: Created reusable hooks (`useUsers`, `useUserInfo`, `useUpdateStatus`) to separate business logic from UI

### Implementation Highlights

- **Query Cancellation**: Implemented using React Query's automatic request cancellation
- **Optimistic Updates**: Used React Query's `onMutate` to instantly update UI before server response

### No Deviations

All requirements from the task specification have been implemented exactly as described. No features were skipped or significantly altered.



##  Deployment

Both frontend and backend are deployed on Railway:

- Frontend is built and served
- Backend runs as a Node.js application
- MongoDB hosted on MongoDB Atlas
- Environment variables configured in Railway dashboard

---

