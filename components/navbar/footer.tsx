"use client";

import {
  Box,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  Fab,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Box
        component="footer"
        sx={{
          background: "linear-gradient(180deg, #1b1b1b 0%, #111 100%)",
          color: "#fff",
          padding: { xs: "2rem 1rem 1rem", md: "3rem 2rem 1.5rem" },
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1.2fr 1fr 1.2fr",
            },
            gap: { xs: 3, md: 5 },
            mb: 4,
          }}
        >
          {/* Left: Logo + Intro */}
          <Box>
            <Image
              src="/logo1.png"
              alt="Life Tech Logo"
              width={300}
              height={180}
              style={{ marginBottom: "1.2rem" }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#ccc",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              Life Tech Pvt. Ltd. is committed to delivering cutting-edge
              technology solutions, expert training, and exceptional services to
              help you stay ahead in the digital world.
            </Typography>
          </Box>

          {/* Middle: Quick Links */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "1.2rem",
                color: "#fff",
              }}
            >
              Quick Links
            </Typography>
            {[
              "Dashboard",
              "About Us",
              "Training",
              "Events",
              "Our Services",
              "Gallery",
              "Blog",
              "Contact Us",
            ].map((item, idx) => (
              <MuiLink
                key={idx}
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  mb: 1,
                  fontSize: "1rem",
                  color: "#bbb",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#00bfff" },
                }}
              >
                {item}
              </MuiLink>
            ))}
          </Box>

          {/* Right: Contact + Newsletter */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "1.2rem",
                color: "#fff",
              }}
            >
              Contact Us
            </Typography>

            <Typography sx={{ mb: 1, color: "#ddd", lineHeight: 1.6 }}>
              Life Tech Pvt. Ltd.
              <br />
              New Baneshwor, Kathmandu 44600, Nepal
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                color: "#ccc",
                fontSize: "0.95rem",
              }}
            >
              <Phone size={18} style={{ marginRight: 6 }} /> 01-5904591,
              9766459711
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                color: "#ccc",
                fontSize: "0.95rem",
              }}
            >
              <Phone size={18} style={{ marginRight: 6 }} /> 985132030 (WhatsApp
              / Viber)
            </Typography>

            <MuiLink
              href="mailto:lifetechnepal40@gmail.com"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                color: "#00bfff",
                fontWeight: 500,
              }}
            >
              <Mail size={18} style={{ marginRight: 6 }} />{" "}
              lifetechnepal40@gmail.com
            </MuiLink>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, idx) => (
                  <MuiLink
                    key={idx}
                    href="#"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      transition: "transform 0.2s ease, color 0.2s ease",
                      "&:hover": { color: "#00bfff", transform: "scale(1.1)" },
                    }}
                  >
                    <Icon size={22} />
                  </MuiLink>
                )
              )}
            </Box>

            {/* Newsletter */}
            <Typography variant="h6" sx={{ mb: 1 }}>
              Newsletter Sign Up
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1,
                  flex: 1,
                  minWidth: "200px",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "red",
                  px: 3,
                  "&:hover": { bgcolor: "#009acd" },
                  fontWeight: "bold",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Divider + Copyright */}
        <Divider sx={{ borderColor: "#333", mb: 2 }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.9rem",
          }}
        >
          © 2010 LifeTech Nepal. All rights reserved. Pramod
        </Typography>
      </Box>

      {/* Back to Top Button */}
      {showButton && (
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "#00bfff",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            "&:hover": { bgcolor: "#009acd" },
          }}
        >
          <ArrowUp size={18} />
        </Fab>
      )}
    </>
  );
}
