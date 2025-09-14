"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "objectives", label: "Objectives" },
  { id: "audience", label: "Target Audience" },
  { id: "events", label: "Our Events" },
  { id: "about", label: "About Us" },
  { id: "details", label: "Event Details" },
  { id: "format", label: "Competition Format" },
];

export default function Dashboard() {
  const [active, setActive] = useState("introduction");

  const scrollToSection = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen mt-16">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40 p-4 sticky top-0 h-screen hidden md:block">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          {sections.map((s) => (
            <Button
              key={s.id}
              variant={active === s.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 space-y-8 overflow-y-auto">
        {/* Introduction */}
        <Card
          id="introduction"
          className="hover:shadow-xl transition rounded-2xl"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Coding Competition 2026, Season 1, hosted by Life Tech Pvt. Ltd.,
              is an exciting platform designed to cultivate and showcase the
              talents of Nepal’s aspiring developers, programmers, and tech
              enthusiasts.
            </p>
            <p>
              Designed for students pursuing degrees in BIT, BSc.CSIT, BCA, and
              IT-related disciplines, the competition bridges the gap between
              academic knowledge and industry requirements.
            </p>
            <p>
              This event is not only about coding—it’s about entrepreneurship,
              innovation, and real-world impact. The best project ideas may
              receive investments of up to 1 Crore through{" "}
              <b>Idea Tapaiko, Lagani Hamro</b>, creating opportunities for
              startups.
            </p>
            <p>
              <b>Key Highlight:</b> Sponsorship ensures exposure to thousands of
              students, industry leaders, and investors while supporting the
              growth of Nepal’s IT ecosystem.
            </p>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card
          id="objectives"
          className="hover:shadow-xl transition rounded-2xl"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <b>Promote Brand Visibility:</b> Reach 5000+ visitors daily and
                thousands online.
              </li>
              <li>
                <b>Build Networks and Relationships:</b> Connect with students,
                educators, professionals, and investors.
              </li>
              <li>
                <b>Showcase Innovation and Expertise:</b> Create a platform for
                companies to demonstrate technology leadership.
              </li>
              <li>
                <b>Support Education & Skill Development:</b> Offer mentorship,
                scholarships, and workshops.
              </li>
              <li>
                <b>Encourage Entrepreneurship:</b> Empower youths with ideas,
                resources, and investment opportunities.
              </li>
            </ul>
            <p className="mt-3">
              <b>Long-Term Goal:</b> Build a sustainable ecosystem where
              education, entrepreneurship, and employment grow together.
            </p>
          </CardContent>
        </Card>

        {/* Target Audience */}
        <Card id="audience" className="hover:shadow-xl transition rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Target Audience
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "SEE & +2 Students",
              "Undergraduate Students",
              "Graduate Students",
              "Tech Companies & Recruiters",
              "Investors & Venture Capitalists",
              "Academic Institutions",
              "General Public & Tech Enthusiasts",
            ].map((aud, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 text-center hover:bg-primary hover:text-white transition"
              >
                {aud}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Our Events */}
        <Card id="events" className="hover:shadow-xl transition rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Our Events</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Website Competition",
              "Next Leader (Leadership Challenge)",
              "Public Speaking & Entrepreneur Seminar",
              "Tech Exhibitions",
              "Startup Pitch Session",
            ].map((event, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 text-center font-medium hover:bg-primary hover:text-white transition"
              >
                {event}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* About Us */}
        <Card id="about" className="hover:shadow-xl transition rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Life Tech Pvt. Ltd. is one of Nepal’s fastest-growing technology
              firms with a vision: <i>Choose life, change life.</i>
            </p>
            <p>
              We specialize in bridging the technological gap by providing
              skill-based training, innovative IT solutions, and organizing
              impactful events like the Coding Competition.
            </p>
            <p>
              <b>What we offer:</b> Internships, IT training, software
              development, and partnerships with startups and enterprises.
            </p>
          </CardContent>
        </Card>

        {/* Event Details */}
        <Card id="details" className="hover:shadow-xl transition rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <p>
              <b>Date:</b> Since March 2025
            </p>
            <p>
              <b>Venue:</b> LifeTech Pvt. Ltd., New Baneshwar, Kathmandu
            </p>
            <p>
              <b>Time:</b> 11:00 am - 5:00 pm
            </p>
            <p>
              <b>Entry:</b> NRs. 2000 (Participation Fee)
            </p>
            <p>
              <b>Prizes:</b>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>1st Prize: NRs. 1,00,000 + Certificate</li>
              <li>2nd Prize: NRs. 50,000 + Certificate</li>
              <li>3rd Prize: NRs. 30,000 + Certificate</li>
            </ul>
            <p>
              <b>Bonus:</b> Top 10 projects get direct access to investors with
              funding opportunities up to 1 Crore.
            </p>
            <p>
              <b>Expected Visitors:</b> 5000+ daily flow from schools and
              colleges nationwide.
            </p>
          </CardContent>
        </Card>

        {/* Competition Format */}
        <Card id="format" className="hover:shadow-xl transition rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Competition Format
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <b>Training Session:</b> 7-day Public Speaking & Entrepreneurship
              Training for 5000+ contestants with national personalities.
            </p>
            <p>
              <b>Round 1:</b> 1000 Qualifiers chosen by IT experts.
            </p>
            <p>
              <b>Round 2:</b> 100 best participants through project
              demonstrations.
            </p>
            <p>
              <b>Final Round:</b> Top 20 evaluated by investors & IT experts.{" "}
              <b>Top 10</b> receive investment opportunities up to 1 Crore.
            </p>
            <p>
              <b>Special Add-on:</b> Winners gain internship offers, tech
              gadgets, and media coverage for national recognition.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
