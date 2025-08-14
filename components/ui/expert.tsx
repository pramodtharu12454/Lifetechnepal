"use client";

import {
  Box,
  TextField,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function LetsConnect() {
  return (
    <Box className="bg-gray-50 py-12 px-4 mt-10">
      {/* Title */}
      <Box className="text-center mb-10">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Let<span style={{ color: "#E53935" }}>s</span> Connect
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
          Ready to transform your business with cutting-edge technology? Get in
          touch with our experts today.
        </Typography>
      </Box>

      {/* Main Flex Layout */}
      <Box className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left Form */}
        <Card
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Send us a Message
          </Typography>

          <Box className="flex flex-col gap-4">
            <Box className="flex gap-3">
              <TextField label="First Name" fullWidth size="small" />
              <TextField label="Last Name" fullWidth size="small" />
            </Box>
            <TextField label="Email" fullWidth size="small" />
            <TextField label="Phone" fullWidth size="small" />
            <TextField
              label="Service Interest"
              select
              fullWidth
              size="small"
              defaultValue="Web Development"
            >
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="App Development">App Development</MenuItem>
              <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
            </TextField>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={9}
              size="small"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#E53935",
                "&:hover": { backgroundColor: "#d32f2f" },
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Card>

        {/* Right Section */}
        <Box className="flex flex-col gap-4 flex-1">
          {/* Red Expert Card */}
          <Card
            sx={{
              p: 3,
              backgroundColor: "#E53935",
              color: "#fff",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Talk to Our Experts
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Our team of technology experts is ready to discuss your project
              requirements and provide tailored solutions for your business
              needs.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#FFEB3B",
                color: "#000",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { backgroundColor: "#fdd835" },
              }}
            >
              Schedule a Consultation
            </Button>
          </Card>

          {/* Contact Info Cards */}
          {[
            {
              icon: <Mail className="text-red-500" />,
              title: "Email Us",
              lines: ["lifetechnepal40@gmail.com"],
            },
            {
              icon: <Phone className="text-red-500" />,
              title: "Call Us",
              lines: [" 01-5904591", "9766459711", " 985132030"],
            },
            {
              icon: <MapPin className="text-red-500" />,
              title: "Visit Us",
              lines: ["New Baneshwor Kathmandu Nepal"],
            },
            {
              icon: <Clock className="text-red-500" />,
              title: "Working Hours",
              lines: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: 10AM - 4PM"],
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              sx={{
                p: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              {item.icon}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
                {item.lines.map((line, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
