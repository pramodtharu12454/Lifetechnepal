"use client";

import {
  Box,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  Fab,
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

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1b1b1b",
          color: "#fff",
          padding: "3rem 1rem 1rem",
        }}
      >
        {/* Top Section: 4 Columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Column 1: Company */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            {[
              "About Us",
              "Our Team",
              "Contact Us",
              "Our Services",
              "Photo Gallery",
              "Placement Partners",
              "Our Partners",
              "Success Gallery",
              "Become an Instructor",
              "Corporate Training",
              "Academic Partners",
            ].map((item, idx) => (
              <MuiLink
                key={idx}
                href="#"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#ccc",
                  "&:hover": { color: "#00bfff" },
                }}
              >
                {item}
              </MuiLink>
            ))}
          </Box>

          {/* Column 2: For Students */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              For Students
            </Typography>
            {[
              "Payment Options",
              "Enroll Now",
              "Career",
              "Offers",
              "Students' Testimonials",
              "Upload Your Resume",
              "Become an Intern",
              "Scholarship",
              "Certificate Verification",
            ].map((item, idx) => (
              <MuiLink
                key={idx}
                href="#"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#ccc",
                  "&:hover": { color: "#00bfff" },
                }}
              >
                {item}
              </MuiLink>
            ))}
          </Box>

          {/* Column 3: Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Info
            </Typography>
            {[
              "Notices",
              "Events",
              "Help Center",
              "News & Media Coverage",
              "Help & FAQ",
              "Terms & conditions",
              "Privacy Policy",
              "Blog",
            ].map((item, idx) => (
              <MuiLink
                key={idx}
                href="#"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#ccc",
                  "&:hover": { color: "#00bfff" },
                }}
              >
                {item}
              </MuiLink>
            ))}

            {/* Newsletter */}
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
              Newsletter Sign Up
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email"
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 1,
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "red",
                  "&:hover": { bgcolor: "#009acd" },
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          {/* Column 4: Contact Us */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Life Tech Pvt. Ltd.
              <br />
              New Baneshwor, Kathmandu 44600, Nepal
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone size={18} style={{ marginRight: 6 }} /> 01-5904591,
              9766459711, 985132030
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone size={18} style={{ marginRight: 6 }} /> 9766459711,
              985132030 (WhatsApp / Viber)
            </Typography>
            <MuiLink
              href="mailto:lifetechnepal40@gmail.com"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                color: "#00bfff",
              }}
            >
              <Mail size={18} style={{ marginRight: 6 }} />{" "}
              lifetechnepal40@gmail.com
            </MuiLink>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, idx) => (
                  <MuiLink
                    key={idx}
                    href="#"
                    target="_blank"
                    sx={{
                      color: "#fff",
                      "&:hover": { color: "#00bfff" },
                    }}
                  >
                    <Icon size={22} />
                  </MuiLink>
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* Bottom Copyright */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.85rem",
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
            "&:hover": { bgcolor: "#009acd" },
          }}
        >
          <ArrowUp size={18} />
        </Fab>
      )}
    </>
  );
}
