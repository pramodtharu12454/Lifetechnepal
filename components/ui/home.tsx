"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import { Button as ShadcnButton } from "@/components/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  const [counts, setCounts] = useState({
    projects: 0,
    students: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targets = { projects: 500, students: 10000, satisfaction: 95 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCountUp();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountUp = () => {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3); // Smooth easing

      setCounts({
        projects: Math.floor(easeOut * targets.projects),
        students: Math.floor(easeOut * targets.students),
        satisfaction: Math.floor(easeOut * targets.satisfaction),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "linear-gradient(180deg, #b71c1c 0%, #b71c1c 100%)",
        color: "#fff",
        py: { xs: 6, md: 40 },
        textAlign: "center",
        position: "relative",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Icons */}
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {["< />", "🗄️", "🛡️"].map((icon, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
              }}
            >
              {icon}
            </Box>
          ))}
        </Stack>

        {/* Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Empowering Your{" "}
          <Box component="span" sx={{ color: "#ffeb3b" }}>
            Digital Future
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: 700,
            mx: "auto",
            color: "rgba(255,255,255,0.9)",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          We transform businesses through cutting-edge technology solutions,
          comprehensive training programs, and innovative digital experiences.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <ShadcnButton className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
            Explore Our Work{" "}
            <ArrowForwardIcon fontSize="small" className="ml-1" />
          </ShadcnButton>

          <ShadcnButton
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-black"
          >
            Get Started Today
          </ShadcnButton>
        </Stack>

        {/* Animated Stats */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={6}
          justifyContent="center"
          sx={{ mt: 6 }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#ffeb3b" }}
            >
              {counts.projects}+{/* adds "+" */}
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Projects Delivered
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#ffeb3b" }}
            >
              {counts.students.toLocaleString()}+
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Students Trained
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#ffeb3b" }}
            >
              {counts.satisfaction}%
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Client Satisfaction
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
