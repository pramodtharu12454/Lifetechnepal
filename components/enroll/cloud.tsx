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
import { Cloud, Cpu, Globe, Layers, BarChart, Shield } from "lucide-react";

export default function CloudComputingCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "Introduction to Cloud Computing",
      icon: Cloud,
      points: [
        "What is Cloud Computing?",
        "Cloud Service Models (IaaS, PaaS, SaaS)",
        "Cloud Deployment Models (Public, Private, Hybrid, Community)",
        "Benefits & Challenges of Cloud Computing",
      ],
    },
    {
      module: "Cloud Providers Overview",
      icon: Globe,
      points: [
        "AWS (Amazon Web Services)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Other Providers (IBM Cloud, Oracle Cloud)",
      ],
    },
    {
      module: "Virtualization & Cloud Architecture",
      icon: Cpu,
      points: [
        "Virtual Machines & Hypervisors",
        "Containers & Docker",
        "Microservices Architecture",
        "Serverless Computing",
        "Cloud Resource Management",
      ],
    },
    {
      module: "AWS Core Services",
      icon: Cloud,
      points: [
        "EC2 (Compute Instances)",
        "S3 (Storage Services)",
        "RDS & DynamoDB (Databases)",
        "IAM (Identity & Access Management)",
        "VPC (Networking)",
      ],
    },
    {
      module: "Azure Core Services",
      icon: BarChart,
      points: [
        "Virtual Machines & App Services",
        "Azure Storage (Blob, Table, Queue)",
        "Azure SQL & Cosmos DB",
        "Azure Active Directory",
        "Azure Networking & Load Balancers",
      ],
    },
    {
      module: "Google Cloud Core Services",
      icon: Layers,
      points: [
        "Compute Engine & App Engine",
        "Cloud Storage & Databases",
        "Google Kubernetes Engine (GKE)",
        "IAM & Security",
        "Networking & Monitoring",
      ],
    },
    {
      module: "Cloud Security & Compliance",
      icon: Shield,
      points: [
        "Cloud Security Basics",
        "Identity & Access Management (IAM)",
        "Encryption & Key Management",
        "Compliance Standards (ISO, GDPR, HIPAA)",
      ],
    },
    {
      module: "DevOps & Cloud Automation",
      icon: Cpu,
      points: [
        "Infrastructure as Code (IaC) with Terraform",
        "CI/CD Pipelines",
        "Automation using Cloud SDK & Scripts",
        "Monitoring & Logging",
      ],
    },
    {
      module: "Cloud Networking & CDN",
      icon: Globe,
      points: [
        "Virtual Networks & Subnets",
        "Load Balancing & Traffic Management",
        "Content Delivery Network (CDN)",
        "DNS & Routing",
      ],
    },
    {
      module: "Cloud Storage & Databases",
      icon: Layers,
      points: [
        "Object, Block, and File Storage",
        "Relational & NoSQL Databases",
        "Backup & Disaster Recovery",
        "Data Replication & High Availability",
      ],
    },
    {
      module: "Containerization & Orchestration",
      icon: Cloud,
      points: [
        "Docker Basics & Containers",
        "Kubernetes Basics & Clusters",
        "Deployment & Scaling in Cloud",
        "Monitoring & Management",
      ],
    },
    {
      module: "Cloud Migration & Strategy",
      icon: Shield,
      points: [
        "Migration Planning & Assessment",
        "Tools for Cloud Migration",
        "Cost Management & Optimization",
        "Best Practices",
      ],
    },
    {
      module: "Cloud Certification Preparation",
      icon: BarChart,
      points: [
        "AWS Certified Solutions Architect",
        "Microsoft Azure Fundamentals (AZ-900)",
        "Google Cloud Associate Cloud Engineer",
        "Tips for Certification Exams",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Cloud Computing Course
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
