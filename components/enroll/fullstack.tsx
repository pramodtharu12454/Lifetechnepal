"use client";

import { Box, Button, Typography } from "@mui/material";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Code, Smartphone, Database, Cloud, Shield, Globe } from "lucide-react";

export default function FullStackCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "HTML & CSS",
      icon: Code,
      points: [
        "HTML5 Overview",
        "HTML Elements, Attributes, Forms",
        "Semantic HTML",
        "CSS3 Basics",
        "Flexbox & Grid",
        "Responsive Design (Media Queries)",
        "CSS Animations & Transitions",
        "Bootstrap / Tailwind CSS Introduction",
      ],
    },
    {
      module: "JavaScript & ES6+",
      icon: Smartphone,
      points: [
        "JavaScript Basics & Syntax",
        "Variables, Data Types, Operators",
        "Functions, Loops, Conditions",
        "DOM Manipulation & Event Handling",
        "ES6+ Features (let/const, arrow functions, template literals)",
        "Async JS: Callbacks, Promises, Async/Await",
        "JavaScript Modules",
        "Error Handling & Debugging",
      ],
    },
    {
      module: "Frontend Framework (React.js)",
      icon: Code,
      points: [
        "JSX, Components & Props",
        "State Management (useState, useReducer)",
        "Hooks (useEffect, useContext, custom hooks)",
        "React Router & Navigation",
        "Forms & Validation",
        "API Integration (Axios / Fetch)",
        "Component Libraries (ShadCN / MUI)",
      ],
    },
    {
      module: "Backend Development (Node.js & Express.js)",
      icon: Cloud,
      points: [
        "Node.js Introduction & NPM",
        "Express.js Routing & Middleware",
        "REST API Development",
        "CRUD Operations",
        "Error Handling & Logging",
        "Authentication (JWT)",
        "Environment Variables",
      ],
    },
    {
      module: "Database (MongoDB)",
      icon: Database,
      points: [
        "MongoDB Basics & Collections",
        "CRUD Operations",
        "Mongoose ODM",
        "Schema Design & Relationships",
        "Aggregation & Data Validation",
        "Connecting Node.js with MongoDB",
      ],
    },
    {
      module: "Authentication & Security",
      icon: Shield,
      points: [
        "User Authentication (JWT)",
        "Password Hashing & Encryption",
        "Role-Based Access Control",
        "Security Best Practices (CORS, HTTPS)",
        "Input Validation & Sanitization",
        "OAuth / Social Login (Optional)",
      ],
    },
    {
      module: "Deployment & DevOps",
      icon: Globe,
      points: [
        "Deployment to Vercel / Heroku",
        "Environment Variables",
        "Git & GitHub Version Control",
        "CI/CD Basics",
        "Docker Basics (Optional)",
        "Monitoring & Logging",
      ],
    },
    {
      module: "Extras / Advanced Topics",
      icon: Code,
      points: [
        "TypeScript for Frontend & Backend",
        "Redux / Zustand for State Management",
        "Testing (Jest, React Testing Library)",
        "WebSockets / Real-time Applications",
        "GraphQL Basics",
        "Cloud Services (AWS, Firebase, Cloudinary)",
        "Project Work & Portfolio Building",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Full Stack Web Development Course
      </Typography>

      {syllabus.map((module, index) => {
        const Icon = module.icon;
        return (
          <Card
            key={index}
            className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader className="flex items-center gap-3">
              <Icon size={28} className="text-blue-500" />
              <div>
                <CardTitle className="text-xl font-semibold">
                  {module.module}
                </CardTitle>
                <CardDescription>{module.points.length} Topics</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {module.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}

      <Box className="text-center mt-8">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => router.push("/letstalk")}
        >
          Talk to Expert
        </Button>
      </Box>
    </Box>
  );
}
