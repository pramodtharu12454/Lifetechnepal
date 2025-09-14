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
import {
  Smartphone,
  Layers,
  Cpu,
  Code,
  Shield,
  Globe,
  Cloud,
} from "lucide-react";

export default function MobileAppDevelopmentCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "Introduction to Mobile App Development",
      icon: Smartphone,
      points: [
        "Overview of Mobile App Development",
        "Platforms: Android, iOS, Cross-Platform",
        "Native vs Hybrid vs Cross-Platform Apps",
        "App Development Lifecycle",
      ],
    },
    {
      module: "Programming Basics for Mobile",
      icon: Code,
      points: [
        "Java/Kotlin for Android Development",
        "Swift for iOS Development",
        "Dart & Flutter for Cross-Platform",
        "Setting Up Development Environment",
      ],
    },
    {
      module: "UI/UX Design for Mobile Apps",
      icon: Layers,
      points: [
        "Mobile App Design Principles",
        "Wireframing & Prototyping",
        "Material Design & Human Interface Guidelines",
        "Responsive Design for Different Devices",
      ],
    },
    {
      module: "Android App Development",
      icon: Cpu,
      points: [
        "Android Studio Overview",
        "Activities, Intents, and Layouts",
        "Fragments & Navigation",
        "RecyclerView & Adapters",
        "Storage: SharedPreferences, SQLite, Room",
      ],
    },
    {
      module: "iOS App Development",
      icon: Globe,
      points: [
        "Xcode Overview",
        "Storyboards & SwiftUI Basics",
        "View Controllers & Navigation",
        "CoreData & File Storage",
        "Handling Permissions & Notifications",
      ],
    },
    {
      module: "Cross-Platform Development (Flutter & React Native)",
      icon: Layers,
      points: [
        "Flutter Widgets & Layouts",
        "State Management (Provider, Riverpod, Redux)",
        "Navigation & Routing",
        "React Native Components & Styling",
        "Using Expo & CLI Tools",
      ],
    },
    {
      module: "Backend Integration",
      icon: Shield,
      points: [
        "RESTful APIs & JSON",
        "HTTP Requests (Axios, Retrofit)",
        "Firebase Integration (Authentication, Realtime Database, Firestore)",
        "Cloud Database & Storage",
      ],
    },
    {
      module: "App Testing & Debugging",
      icon: Cpu,
      points: [
        "Unit Testing & Widget Testing",
        "Debugging Tools in Android Studio & Xcode",
        "UI/UX Testing",
        "Beta Testing & TestFlight",
      ],
    },
    {
      module: "App Deployment",
      icon: Globe,
      points: [
        "Play Store Deployment Process",
        "App Store Deployment Process",
        "App Signing & Certificates",
        "App Versioning & Updates",
      ],
    },
    {
      module: "Advanced Features",
      icon: Cloud,
      points: [
        "Push Notifications & Messaging",
        "Location & Maps Integration",
        "Camera, Sensors & Media Handling",
        "In-App Purchases & Monetization",
        "Analytics & Crash Reporting",
      ],
    },
    {
      module: "Project & Portfolio",
      icon: Shield,
      points: [
        "Real-world Mobile App Projects",
        "End-to-End App Development",
        "Publishing & Maintaining Apps",
        "Portfolio Showcase",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Mobile App Development Course
      </Typography>

      {syllabus.map((module, index) => {
        const Icon = module.icon;
        return (
          <Card
            key={index}
            className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader className="flex items-center gap-3">
              <Icon size={28} className="text-green-500" />
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
