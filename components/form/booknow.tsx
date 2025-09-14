"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

// Program list
const programs = [
  { id: "fullstack", title: "Full Stack Development", duration: "6 months" },
  { id: "mobile", title: "Mobile App Development", duration: "4 months" },
  { id: "datascience", title: "Data Science & AI", duration: "8 months" },
  { id: "cloud", title: "Cloud Computing", duration: "3 months" },
  { id: "cybersecurity", title: "Cybersecurity", duration: "5 months" },
  { id: "marketing", title: "Digital Marketing", duration: "3 months" },
];

export default function BookNowPage() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: program ? program.id : "", // default subject from URL
    message: "",
  });

  if (!program) {
    return <Typography variant="h6">Program not found!</Typography>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Booking submitted:\nCourse: ${
        programs.find((p) => p.id === formData.subject)?.title
      }\nName: ${formData.name}\nEmail: ${formData.email}`
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 6,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
      }}
    >
      {/* Header */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Book Now
      </Typography>
      <Typography sx={{ mb: 3, color: "gray" }}>
        Select your desired training program and fill in your details.
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Subject Dropdown */}
        <TextField
          select
          label="Subject / Course"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        >
          {programs.map((p) => (
            <MenuItem key={p.id} value={p.id}>
              {p.title} ({p.duration})
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#ff4d4d",
            "&:hover": { backgroundColor: "#e63b3b" },
            fontWeight: "bold",
          }}
        >
          Confirm Booking
        </Button>
      </form>
    </Box>
  );
}
