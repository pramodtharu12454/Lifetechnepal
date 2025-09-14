"use client";

import { Box, Button, Typography } from "@mui/material";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Shield, Globe, Cpu, Layers, BarChart, Code } from "lucide-react";

export default function CyberSecurityCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "Introduction to Cybersecurity",
      icon: Shield,
      points: [
        "What is Cybersecurity?",
        "Importance & Applications",
        "Types of Cyber Threats",
        "Cybersecurity Principles & Best Practices",
      ],
    },
    {
      module: "Network Security",
      icon: Globe,
      points: [
        "Networking Basics (TCP/IP, OSI Model)",
        "Firewalls & VPNs",
        "Intrusion Detection & Prevention Systems (IDS/IPS)",
        "Network Monitoring & Security Tools",
      ],
    },
    {
      module: "Ethical Hacking & Penetration Testing",
      icon: Cpu,
      points: [
        "Introduction to Ethical Hacking",
        "Footprinting & Reconnaissance",
        "Scanning & Enumeration",
        "Vulnerability Assessment",
        "Exploitation Techniques",
        "Reporting & Mitigation",
      ],
    },
    {
      module: "Web Application Security",
      icon: Layers,
      points: [
        "Common Web Vulnerabilities (OWASP Top 10)",
        "SQL Injection, XSS, CSRF",
        "Secure Coding Practices",
        "Web Application Firewalls (WAF)",
      ],
    },
    {
      module: "Cryptography",
      icon: BarChart,
      points: [
        "Basics of Encryption & Decryption",
        "Symmetric & Asymmetric Cryptography",
        "Hashing Algorithms",
        "Digital Signatures & Certificates",
        "SSL/TLS & Secure Communication",
      ],
    },
    {
      module: "Operating System Security",
      icon: Code,
      points: [
        "Securing Windows & Linux Systems",
        "User & Access Management",
        "File System Permissions",
        "Patch Management & Updates",
      ],
    },
    {
      module: "Malware & Threat Analysis",
      icon: Shield,
      points: [
        "Types of Malware (Virus, Worm, Trojan, Ransomware)",
        "Malware Detection & Removal",
        "Threat Analysis & Incident Response",
        "Anti-virus & Endpoint Security",
      ],
    },
    {
      module: "Cybersecurity Tools & Technologies",
      icon: Layers,
      points: [
        "Wireshark, Nmap, Metasploit",
        "Burp Suite, Kali Linux",
        "SIEM Tools",
        "Monitoring & Logging Tools",
      ],
    },
    {
      module: "Cloud Security",
      icon: Globe,
      points: [
        "Introduction to Cloud Security",
        "Securing Cloud Infrastructure (AWS, Azure, GCP)",
        "Cloud Access Security Brokers (CASB)",
        "Cloud Compliance & Governance",
      ],
    },
    {
      module: "Cybersecurity Governance & Compliance",
      icon: BarChart,
      points: [
        "Security Policies & Procedures",
        "Risk Management & Assessment",
        "GDPR, HIPAA, ISO 27001",
        "Auditing & Compliance",
      ],
    },
    {
      module: "Incident Response & Digital Forensics",
      icon: Cpu,
      points: [
        "Incident Response Planning",
        "Detection & Analysis",
        "Forensic Investigation Techniques",
        "Reporting & Documentation",
      ],
    },
    {
      module: "Advanced Cybersecurity Topics",
      icon: Code,
      points: [
        "Penetration Testing Automation",
        "Ethical Hacking Certifications (CEH, OSCP)",
        "Emerging Threats & Trends (AI & IoT Security)",
        "Career Pathways in Cybersecurity",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Cybersecurity Course
      </Typography>

      {syllabus.map((module, index) => {
        const Icon = module.icon;
        return (
          <Card
            key={index}
            className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader className="flex items-center gap-3">
              <Icon size={28} className="text-red-500" />
              <div>
                <CardTitle className="text-xl font-semibold">
                  {module.module}
                </CardTitle>
                <CardDescription>{module.points.length} Topics</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {module.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}

      <Box className="text-center mt-8">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => router.push("/letstalk")}
        >
          Talk to Expert
        </Button>
      </Box>
    </Box>
  );
}
