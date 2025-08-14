"use client";

import { Box, Typography, Button, Chip } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI
import { Code, Smartphone, Database, Cloud, Shield, Globe } from "lucide-react";

const programs = [
  {
    icon: <Code size={28} color="#ff4d4d" />,
    title: "Full Stack Development",
    duration: "6 months",
    level: "Beginner to Advanced",
    description:
      "Master modern web development with React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    students: "2,500+ students enrolled",
    rating: "★ 4.8/5",
  },
  {
    icon: <Smartphone size={28} color="#ff4d4d" />,
    title: "Mobile App Development",
    duration: "4 months",
    level: "Intermediate",
    description:
      "Build native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    students: "1,800+ students enrolled",
    rating: "★ 4.8/5",
  },
  {
    icon: <Database size={28} color="#ff4d4d" />,
    title: "Data Science & AI",
    duration: "8 months",
    level: "Intermediate to Advanced",
    description:
      "Dive into machine learning, data analysis, and artificial intelligence.",
    technologies: ["Python", "TensorFlow", "SQL", "PowerBI"],
    students: "1,200+ students enrolled",
    rating: "★ 4.8/5",
  },
  {
    icon: <Cloud size={28} color="#ff4d4d" />,
    title: "Cloud Computing",
    duration: "3 months",
    level: "Intermediate",
    description:
      "Learn cloud architecture, deployment, and management on major platforms.",
    technologies: ["AWS", "Azure", "GCP", "Docker"],
    students: "900+ students enrolled",
    rating: "★ 4.8/5",
  },
  {
    icon: <Shield size={28} color="#ff4d4d" />,
    title: "Cybersecurity",
    duration: "5 months",
    level: "Beginner to Advanced",
    description:
      "Protect digital assets with comprehensive security practices and tools.",
    technologies: ["Ethical Hacking", "Penetration Testing", "Security Audit"],
    students: "700+ students enrolled",
    rating: "★ 4.8/5",
  },
  {
    icon: <Globe size={28} color="#ff4d4d" />,
    title: "Digital Marketing",
    duration: "3 months",
    level: "Beginner",
    description:
      "Master online marketing strategies, SEO, and social media management.",
    technologies: ["SEO", "Google Ads", "Social Media", "Analytics"],
    students: "3,000+ students enrolled",
    rating: "★ 4.8/5",
  },
];

export default function TrainingPrograms() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, mt: 8, textAlign: "center" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Professional <span style={{ color: "#ff4d4d" }}>Training Programs</span>
      </Typography>
      <Typography sx={{ mb: 4, color: "gray" }}>
        Accelerate your career with our industry-leading training programs
        designed by experts and trusted by professionals worldwide.
      </Typography>

      {/* Flexbox Layout - 3 per row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {programs.map((p, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              border: "1px solid #eee",
              flex: "1 1 calc(33.333% - 24px)", // exactly 3 per row
              maxWidth: "calc(33.333% - 24px)",
              display: "flex",
              flexDirection: "column",
              minWidth: "280px",
            }}
          >
            <CardContent style={{ textAlign: "left", flexGrow: 1 }}>
              {p.icon}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
              >
                {p.title}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                <Chip label={p.duration} size="small" />
                <Chip label={p.level} size="small" color="primary" />
              </Box>
              <Typography sx={{ mb: 1, fontSize: "0.9rem", color: "gray" }}>
                {p.description}
              </Typography>

              <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                Technologies:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {p.technologies.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" variant="outlined" />
                ))}
              </Box>

              <Typography sx={{ color: "gray", fontSize: "0.85rem" }}>
                {p.students}
              </Typography>
              <Typography sx={{ color: "#ff4d4d", fontSize: "0.9rem" }}>
                {p.rating}
              </Typography>
            </CardContent>

            <Box sx={{ p: 2, textAlign: "center" }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ff4d4d",
                  "&:hover": { backgroundColor: "#e63b3b" },
                  borderRadius: "8px",
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          backgroundColor: "#ff4d4d",
          borderRadius: "8px",
          py: 4,
          px: 2,
          mt: 6,
          color: "#fff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Ready to Start Learning?
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Join thousands of professionals who have transformed their careers
          with our training programs.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ffcc00" },
            }}
          >
            View All Courses
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#ff4d4d",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#f8f8f8" },
            }}
          >
            Schedule Consultation
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
