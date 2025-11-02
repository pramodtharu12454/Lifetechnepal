"use client";

import { useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const sectionRef = useRef(null);

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "linear-gradient(180deg, #b71c1c 0%, #880808 100%)",
        color: "#fff",
        py: { xs: 6, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/image1.png" // 👈 replace with your image
            alt="Coding Hero"
            width={800}
            height={400}
            style={{
              borderRadius: "20px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
            }}
          />
        </Box>

        {/* Right Side Text and Button */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Top Title */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            Choose Life,{" "}
            <Box component="span" sx={{ color: "white", fontWeight: "bold" }}>
              Change Life
            </Box>
          </Typography>

          {/* Main Heading */}
          <Typography
            sx={{
              fontFamily: "Arial Black, Arial, sans-serif",
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: "bold",
              color: "#FFD700",
            }}
          >
            Coding Competition
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: "600",
              color: "white",
              animation: "pulse 2s infinite",
            }}
          >
            🚀 Coming Soon...
          </Typography>

          {/* Button with Arrow */}
          <Link href="/tranning" passHref>
            <Button
              variant="contained"
              sx={{
                mt: 5,
                backgroundColor: "#FFD700",
                color: "#880808",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                "&:hover": {
                  backgroundColor: "#ffcc00",
                },
              }}
            >
              Explore Our Courses
              <ArrowRight size={20} />
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
