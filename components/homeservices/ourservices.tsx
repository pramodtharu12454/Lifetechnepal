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
} from "lucide-react";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function ServicesSection() {
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
    <section className="py-12 px-4 lg:px-16 mt-10 relative" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-muted-foreground">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      {/* Service cards grid */}
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

      {/* View All button (bottom of section) */}
      <div className="flex justify-center mt-12">
        <Link href="/services/viewallservice">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-transform hover:scale-105">
            View All Services
          </Button>
        </Link>
      </div>
    </section>
  );
}
