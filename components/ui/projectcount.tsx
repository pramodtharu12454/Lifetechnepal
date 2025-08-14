"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: <CheckCircleOutlineIcon fontSize="large" />,
    number: 250,
    label: "WORKS COMPLETED",
  },
  {
    icon: <DescriptionOutlinedIcon fontSize="large" />,
    number: 13,
    label: "YEARS OF EXPERIENCE",
  },
  {
    icon: <GroupOutlinedIcon fontSize="large" />,
    number: 5000,
    label: "TOTAL CLIENTS",
  },
  {
    icon: <EmojiEventsOutlinedIcon fontSize="large" />,
    number: 10,
    label: "AWARD WON",
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // 30% visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startCount = () => {
    let startTime: number | null = null;
    const duration = 2000; // animation time in ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(stat.number * progress)));

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
        backgroundColor: "red", // light red
        py: 6,
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="text-center bg-transparent shadow-none"
          style={{ width: "200px" }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "3px solid white",
                width: 80,
                height: 80,
                margin: "0 auto 16px auto",
                color: "white",
              }}
            >
              {stat.icon}
            </Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {counts[index]}
            </Typography>
            <Typography sx={{ color: "white" }}>{stat.label}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
