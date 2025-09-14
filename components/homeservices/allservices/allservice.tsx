"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Smartphone,
  Globe,
  Cloud,
  BarChart,
  Settings,
  Film,
  Box,
  Cpu,
  Layers,
  CheckSquare,
} from "lucide-react"; // Updated icons
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSectionall() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
      points: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "API Integration",
      ],
      price: "Starting at RS 2,999",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android platforms.",
      points: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
      price: "Starting at RS 4,999",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      desc: "Comprehensive security audits, penetration testing, and security implementation.",
      points: [
        "Security Audits",
        "Penetration Testing",
        "Security Training",
        "Compliance Support",
      ],
      price: "Starting at RS 1,999",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      desc: "Cloud migration, infrastructure setup, and ongoing cloud management services.",
      points: [
        "AWS/Azure Migration",
        "DevOps Setup",
        "Auto Scaling",
        "Cost Optimization",
      ],
      price: "Starting at Rs 3,499",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      desc: "Business intelligence, data visualization, and advanced analytics solutions.",
      points: [
        "Data Warehousing",
        "BI Dashboards",
        "Machine Learning",
        "Predictive Analytics",
      ],
      price: "Starting at RS 5,999",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      desc: "Strategic technology consulting to help businesses optimize their IT infrastructure.",
      points: [
        "Technology Strategy",
        "Digital Transformation",
        "Process Optimization",
        "Team Training",
      ],
      price: "Starting at RS 199/hr",
    },
    {
      icon: Film,
      title: "Video Editing",
      desc: "Professional video editing services for YouTube, social media, and marketing campaigns.",
      points: [
        "Color Grading",
        "Transitions",
        "Motion Graphics",
        "Sound Design",
      ],
      price: "Starting at RS 1,499",
    },
    {
      icon: Box,
      title: "3D Animation",
      desc: "High-quality 3D animations for marketing, presentations, and films.",
      points: ["Modeling", "Rigging", "Texturing", "Rendering"],
      price: "Starting at RS 7,999",
    },
    {
      icon: Cpu,
      title: "Hardware & Network",
      desc: "Setup, maintenance, and optimization of IT hardware and networks.",
      points: [
        "PC Setup",
        "Server Installation",
        "Network Configuration",
        "Troubleshooting",
      ],
      price: "Starting at RS 2,499",
    },
    {
      icon: Layers,
      title: "AutoCAD 3D",
      desc: "Professional 3D designs and drawings using AutoCAD.",
      points: ["3D Modeling", "Blueprints", "Structural Design", "Drafting"],
      price: "Starting at RS 3,999",
    },
    {
      icon: CheckSquare,
      title: "3D QA",
      desc: "3D design quality assurance and testing for production-ready models.",
      points: [
        "Model Verification",
        "Texture Checking",
        "Topology Analysis",
        "Simulation Testing",
      ],
      price: "Starting at RS 2,999",
    },
    {
      icon: Settings,
      title: "UI/UX Design",
      desc: "User interface and experience design for web and mobile applications.",
      points: ["Wireframing", "Prototyping", "User Research", "Visual Design"],
      price: "Starting at RS 2,499",
    },
    {
      icon: Settings,
      title: "PHP/Frameworks",
      desc: "PHP and framework-based development for dynamic websites and apps.",
      points: ["Laravel", "CodeIgniter", "API Development", "CMS Integration"],
      price: "Starting at RS 3,499",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to complete a web project?",
      answer:
        "Typically 4-12 weeks depending on complexity, design, and functionality requirements.",
    },
    {
      question: "Do you provide maintenance after project delivery?",
      answer:
        "Yes, we offer support packages including bug fixes, updates, and optimizations.",
    },
    {
      question: "Can I request custom features for mobile apps?",
      answer:
        "Absolutely! We develop mobile apps tailored to your business requirements.",
    },
  ];

  const partners = [
    { name: "TechCorp", logo: "/partners/techcorp.png" },
    { name: "Cloudify", logo: "/partners/cloudify.png" },
    { name: "DataPlus", logo: "/partners/dataplus.png" },
    { name: "SecureIT", logo: "/partners/secureit.png" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll<HTMLDivElement>(".service-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const distance = Math.sqrt(
          Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
        );
        const maxDistance = 250;
        const proximity = Math.max(0, 1 - distance / maxDistance);
        card.style.transform = `scale(${1 + proximity * 0.05}) translateY(${
          -proximity * 5
        }px)`;
        card.style.transition = "transform 0.1s ease-out";
      });
    };

    const resetCards = () => {
      const cards = container.querySelectorAll<HTMLDivElement>(".service-card");
      cards.forEach(
        (card) => (card.style.transform = "scale(1) translateY(0)")
      );
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetCards);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetCards);
    };
  }, []);

  return (
    <section className="py-12 px-4 lg:px-16 mt-10" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-muted-foreground">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="service-card shadow-sm transition-transform"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="bg-red-500 text-white rounded-full p-3">
                <service.icon size={28} />
              </div>
              <CardTitle className="mt-3">{service.title}</CardTitle>
              <CardDescription className="text-center">
                {service.desc}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-yellow-500 font-semibold">
                {service.price}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow-sm">
              <p className="font-semibold">{faq.question}</p>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">Our Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
              <p className="mt-2 text-sm font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* More Info Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
        <p className="text-muted-foreground">
          We provide end-to-end IT solutions for businesses of all sizes. With a
          focus on quality, innovation, and timely delivery, we ensure your
          digital presence is optimized for success. Our team of experts
          guarantees reliable support, cutting-edge technology, and personalized
          strategies to elevate your business.
        </p>
      </div>
    </section>
  );
}
