"use client";

import { useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

export default function HeroSection() {
  const [] = useState(false);
  const sectionRef = useRef(null);

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "linear-gradient(180deg, #b71c1c 0%, #880808 100%)",
        color: "#fff",
        py: { xs: 6, md: 16 },
        textAlign: "center",
        position: "relative",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Top Title */}
        <Typography sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, mb: 4 }}>
          Choose Life,{" "}
          <Box component="span" sx={{ color: "white" }}>
            change life
          </Box>
        </Typography>

        {/* Coding Competition */}
        <h1
          style={{
            fontFamily: "Arial Black, Arial, sans-serif",
            fontSize: "5rem",
            fontWeight: "bold",
            color: "#FFD700",
          }}
          className="md:text-8xl"
        >
          Coding Competition
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-2xl md:text-3xl font-semibold text-white animate-pulse drop-shadow-lg">
          🚀 Coming Soon...
        </p>
      </Container>
    </Box>
  );
}
