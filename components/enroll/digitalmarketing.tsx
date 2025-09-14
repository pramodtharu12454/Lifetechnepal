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
import { Globe, BarChart, Smartphone, Layers, Shield, Cpu } from "lucide-react";

export default function DigitalMarketingCourseDetail() {
  const router = useRouter();

  const syllabus = [
    {
      module: "Introduction to Digital Marketing",
      icon: Globe,
      points: [
        "Overview of Digital Marketing",
        "Traditional vs Digital Marketing",
        "Importance in Business",
        "Marketing Channels & Platforms",
        "Digital Marketing Strategy",
      ],
    },
    {
      module: "Search Engine Optimization (SEO)",
      icon: BarChart,
      points: [
        "Introduction to SEO & Search Engines",
        "Keyword Research & Analysis",
        "On-page SEO (Meta Tags, Headings, Content)",
        "Off-page SEO (Backlinks, Guest Posting)",
        "Technical SEO (Sitemap, Robots.txt, Site Speed, Mobile Optimization)",
        "SEO Tools: Google Analytics, Google Search Console, SEMrush",
      ],
    },
    {
      module: "Social Media Marketing (SMM)",
      icon: Smartphone,
      points: [
        "Platforms: Facebook, Instagram, LinkedIn, Twitter, TikTok",
        "Content Strategy & Planning",
        "Content Creation & Scheduling",
        "Paid Ads Campaigns Management",
        "Social Media Analytics & Reporting",
        "Influencer Marketing",
      ],
    },
    {
      module: "Content Marketing",
      icon: Layers,
      points: [
        "Content Creation & Strategy",
        "Blogging, Vlogs, Video Marketing",
        "Visual Content & Tools (Canva, Photoshop)",
        "Content Distribution Channels",
        "Content SEO & Optimization",
        "Storytelling Techniques",
      ],
    },
    {
      module: "Email Marketing",
      icon: Shield,
      points: [
        "Building Email Lists",
        "Email Campaign Design",
        "Automation & Drip Campaigns",
        "Segmentation & Personalization",
        "A/B Testing & Optimization",
        "Analytics & Reporting",
      ],
    },
    {
      module: "PPC & Google Ads",
      icon: BarChart,
      points: [
        "Introduction to PPC",
        "Google Ads Setup & Campaign Types",
        "Keyword Planning & Ad Copywriting",
        "Display & Video Ads",
        "Analytics & Conversion Tracking",
        "Optimization & Budget Management",
      ],
    },
    {
      module: "Affiliate Marketing",
      icon: Globe,
      points: [
        "Affiliate Networks & Programs",
        "Tracking, Reporting & Commissions",
        "Promoting Affiliate Products",
        "Case Studies & Best Practices",
      ],
    },
    {
      module: "Analytics & Reporting",
      icon: Layers,
      points: [
        "Google Analytics Setup & Dashboard",
        "Tracking Website Traffic & Conversions",
        "Reporting Tools (Google Data Studio, Tableau)",
        "Data-driven Marketing Decisions",
      ],
    },
    {
      module: "Mobile Marketing",
      icon: Smartphone,
      points: [
        "SMS & Push Notifications",
        "Mobile App Marketing",
        "Mobile Advertising & Campaigns",
        "Mobile Analytics & Optimization",
      ],
    },
    {
      module: "Video Marketing & YouTube",
      icon: Cpu,
      points: [
        "YouTube SEO & Optimization",
        "Video Script Writing & Storyboarding",
        "Video Editing Basics",
        "Video Ads & Monetization",
        "Analytics & Performance Tracking",
      ],
    },
    {
      module: "E-commerce & Marketplace Marketing",
      icon: Globe,
      points: [
        "Selling on Amazon, Shopify, eBay",
        "Product Listing Optimization",
        "Ads for E-commerce Platforms",
        "Customer Retention Strategies",
      ],
    },
    {
      module: "Conversion Rate Optimization (CRO)",
      icon: Shield,
      points: [
        "Landing Page Optimization",
        "Funnel Optimization",
        "A/B Testing & Tools (Optimizely, Hotjar)",
        "UX & UI Best Practices",
      ],
    },
    {
      module: "Advanced Tools & Automation",
      icon: Layers,
      points: [
        "Marketing Automation (HubSpot, Mailchimp)",
        "CRM Tools (Zoho, Salesforce)",
        "Chatbots & AI Tools in Marketing",
        "Remarketing & Retargeting",
      ],
    },
    {
      module: "Trends & Case Studies",
      icon: Globe,
      points: [
        "Latest Digital Marketing Trends",
        "Successful Campaign Case Studies",
        "Emerging Platforms (TikTok, AI-based Marketing)",
      ],
    },
  ];

  return (
    <Box className="p-4 max-w-6xl mx-auto mt-16">
      <Typography variant="h3" className="mb-8 text-center font-bold">
        Digital Marketing Course
      </Typography>

      {syllabus.map((module, index) => {
        const Icon = module.icon;
        return (
          <Card
            key={index}
            className="mb-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader className="flex items-center gap-3">
              <Icon size={28} className="text-green-500" />
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
