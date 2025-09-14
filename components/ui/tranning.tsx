"use client";

import { Box, Typography, Button, Chip } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN UI
import { Code, Smartphone, Database, Cloud, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: "fullstack",
    badge: "Best Seller",
    image: "/traning/full stack.jpg",
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
    id: "mobile",
    badge: "Popular",
    image: "/traning/mobileapp.jpg",
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
    id: "datascience",
    badge: "New",
    image: "/traning/datascience.jpg",
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
    id: "cloud",
    badge: "Trending",
    image: "/traning/cloudcomputing.jpg",
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
    id: "cybersecurity",
    badge: "Hot",
    image: "/traning/cybersecurity.jpg",
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
    id: "marketing",
    badge: "Top Rated",
    image: "/traning/digitalmarketing.jpg",
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

      {/* Grid Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {programs.map((p, index) => (
          <Card
            key={index}
            id={p.id}
            className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              border: "1px solid #eee",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
              padding: 0, // p-0
            }}
          >
            {/* Image with overlay */}
            <Box sx={{ position: "relative", height: { xs: 160, md: 200 } }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Top-left ribbon */}
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: -30,
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  px: 3,
                  py: 0.5,
                  transform: "rotate(-45deg)",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  width: "120px",
                  textAlign: "center",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                {p.badge}
              </Box>

              {/* Overlay text */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  color: "#fff",
                  p: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {p.title}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem" }}>
                  {p.technologies.join(", ")}
                </Typography>
              </Box>
            </Box>

            {/* Card Content */}
            <CardContent
              style={{ textAlign: "left", flexGrow: 1, padding: 12 }}
            >
              <Box
                sx={{ display: "flex", gap: 1, mb: 1, mt: 1, flexWrap: "wrap" }}
              >
                <Chip label={p.duration} size="small" />
                <Chip label={p.level} size="small" color="primary" />
              </Box>
              <Typography sx={{ mb: 1, fontSize: "0.85rem", color: "gray" }}>
                {p.description}
              </Typography>

              <Typography sx={{ color: "gray", fontSize: "0.8rem" }}>
                {p.students}
              </Typography>
              <Typography sx={{ color: "#ff4d4d", fontSize: "0.85rem" }}>
                {p.rating}
              </Typography>
            </CardContent>

            {/* Buttons */}
            <Box
              sx={{
                p: 2,
                display: "flex",
                gap: 1,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Link href={`/enroll/${p.id}`} style={{ flex: 1 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: "#ff4d4d",
                    color: "#ff4d4d",
                    fontWeight: "bold",
                  }}
                >
                  View Details
                </Button>
              </Link>
              <Link href={`/book/${p.id}`} style={{ flex: 1 }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#ff4d4d",
                    "&:hover": { backgroundColor: "#e63b3b" },
                    fontWeight: "bold",
                  }}
                >
                  Book Now
                </Button>
              </Link>
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
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Ready to Start Learning?
        </Typography>
        <Typography sx={{ mb: 3, fontSize: "0.95rem" }}>
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
