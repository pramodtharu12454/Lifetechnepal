"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LifeTechPage = () => {
  return (
    <div className="px-8 py-12 space-y-16 mt-7">
      {/* Section: More About Life Tech */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          More About <span className="text-red-500">Life Tech</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Discover what our clients say, meet our expert team, get answers to
          common questions, and see our certifications
        </p>
      </div>

      {/* Section: Client Testimonials */}
      <div>
        <h3 className="flex items-center justify-center text-xl font-bold mb-2">
          <span className="mr-2">💬</span> Client Testimonials
        </h3>
        <p className="text-center text-gray-500 mb-6">
          What our clients say about working with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              company: "TechCorp Solutions",
              review:
                "Life Tech transformed our infrastructure completely. Their cloud migration services saved us 40% in operational costs while improving our system reliability.",
            },
            {
              name: "Michael Chen",
              company: "StartupX",
              review:
                "The AI development team at Life Tech built our recommendation engine from scratch. The results exceeded our expectations with 3x user engagement.",
            },
            {
              name: "Emily Rodriguez",
              company: "Global Finance Inc",
              review:
                "Their cybersecurity training program was excellent. Our team is now well-equipped to handle modern security challenges.",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="p-6 min-h-[300px] shadow-lg hover:shadow-xl transition-shadow rounded-xl"
            >
              <CardContent className="space-y-4 flex flex-col justify-between h-full">
                <div className="flex items-center space-x-4">
                  <Avatar sx={{ width: 70, height: 70, fontSize: 24 }}>
                    {item.name.charAt(0)}
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>
                <Rating value={5} readOnly size="large" />
                <Typography
                  variant="body1"
                  className="text-gray-600 italic leading-relaxed"
                >
                  {item.review}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section: Meet Our Expert Team */}
      <div>
        <h3 className="flex items-center justify-center text-xl font-bold mb-2">
          <span className="mr-2">👥</span> Meet Our Expert Team
        </h3>
        <p className="text-center text-gray-500 mb-6">
          The talented professionals behind Life Tech’s success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              name: "David Kumar",
              role: "Chief Technology Officer",
              skills: "Cloud Architecture, AI/ML",
            },
            {
              name: "Lisa Zhang",
              role: "Lead Cybersecurity Expert",
              skills: "Penetration Testing, Security Audits",
            },
            {
              name: "Alex Thompson",
              role: "Senior Full-Stack Developer",
              skills: "React, Node.js, DevOps",
            },
            {
              name: "Maria Santos",
              role: "AI/ML Specialist",
              skills: "Machine Learning, Data Science",
            },
          ].map((member, idx) => (
            <Card
              key={idx}
              className="p-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow rounded-xl text-center"
            >
              <CardContent className="space-y-4 flex flex-col items-center justify-center h-full">
                <Avatar sx={{ width: 80, height: 80, fontSize: 28 }}>
                  {member.name.charAt(0)}
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{member.name}</p>
                  <p className="text-red-500 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{member.skills}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section: Frequently Asked Questions */}
      <div>
        <h3 className="flex items-center justify-center text-xl font-bold mb-2">
          <span className="mr-2">❓</span> Frequently Asked Questions
        </h3>
        <p className="text-center text-gray-500 mb-6">
          Get answers to common questions about our services
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How long does a typical software development project take?",
              a: "Project timelines vary based on complexity, but most projects range from 3–6 months. We provide detailed timelines during our initial consultation.",
            },
            {
              q: "Do you offer ongoing support after project completion?",
              a: "Yes, we provide 6 months of free support and maintenance, with optional extended support packages available.",
            },
            {
              q: "What technologies do you specialize in?",
              a: "We specialize in React, Node.js, Python, AWS, Azure, AI/ML frameworks, and modern cybersecurity tools.",
            },
            {
              q: "Can you work with our existing team?",
              a: "Absolutely! We offer team augmentation services and can seamlessly integrate with your existing development processes.",
            },
          ].map((item, idx) => (
            <Accordion
              key={idx}
              className="shadow-md hover:shadow-lg rounded-lg transition-shadow"
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" className="font-semibold">
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  className="text-gray-600 leading-relaxed"
                >
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Section: Certifications & Expertise */}
      <div>
        <h3 className="flex items-center justify-center text-xl font-bold mb-2">
          <span className="mr-2">🏅</span> Certifications & Expertise
        </h3>
        <p className="text-center text-gray-500 mb-6">
          Our teams professional certifications and expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "AWS Certified Solutions Architect",
              level: "Professional",
            },
            { title: "Microsoft Azure Expert", level: "Expert" },
            { title: "Google Cloud Professional", level: "Professional" },
            { title: "Certified Ethical Hacker (CEH)", level: "Expert" },
            { title: "ISO 27001 Lead Implementer", level: "Certified" },
            { title: "PMP Project Management", level: "Professional" },
          ].map((cert, idx, arr) => {
            const isLastSingle = idx === arr.length - 1 && arr.length % 3 === 1; // single in last row
            const isLastTwo = idx >= arr.length - 2 && arr.length % 3 === 2; // two in last row

            return (
              <Card
                key={idx}
                className={`p-6 min-h-[150px] shadow-md hover:shadow-lg rounded-xl transition-shadow ${
                  isLastSingle
                    ? "md:col-span-3"
                    : isLastTwo
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <CardContent className="flex flex-col justify-center h-full">
                  <p className="font-semibold text-lg">{cert.title}</p>
                  <p
                    className={`text-sm mt-1 font-medium ${
                      cert.level === "Expert"
                        ? "text-red-500"
                        : cert.level === "Certified"
                        ? "text-green-500"
                        : "text-orange-500"
                    }`}
                  >
                    {cert.level}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LifeTechPage;
