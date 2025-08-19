"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UpcomingEvents() {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      title: "AI & Machine Learning Workshop",
      price: "Free",
      description:
        "Hands-on workshop covering the fundamentals of AI and ML with practical applications.",
      date: "Sunday, September 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Life Tech Innovation Center",
      attendees: 45,
    },
    {
      title: "Web Development Bootcamp",
      price: "Rs 2999",
      description:
        "Intensive bootcamp covering React, Node.js, and modern web development practices.",
      date: "Sunday, September 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Online & Onsite",
      attendees: 62,
    },
    {
      title: "Cybersecurity Awareness Summit",
      price: "RS 2999",
      description:
        "Industry experts discuss latest cybersecurity threats and protection strategies.",
      date: "Saturday, October 5, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Grand Convention Hall",
      attendees: 120,
    },
    {
      title: "Mobile App Development Hackathon",
      price: "Free",
      description:
        "48-hour hackathon focused on building innovative mobile apps.",
      date: "Friday, October 25, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "Life Tech Hub",
      attendees: 80,
    },
    {
      title: "Cloud Computing & DevOps Seminar",
      price: "Rs 1999",
      description:
        "Learn about AWS, Docker, Kubernetes, and CI/CD from industry experts.",
      date: "Sunday, November 10, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Innovation Hall",
      attendees: 95,
    },
  ];

  const gallery = [
    {
      img: "/bca.jpg",
      title: "Coding Competition",
      desc: "A platform for young innovators to showcase coding skills.",
    },
    {
      img: "/it.jpg",
      title: "BIT, BSc.CSIT, BCA Students",
      desc: "Special coding contest for IT-related disciplines.",
    },
    {
      img: "/bba.jpg",
      title: "Entrepreneurship in Tech",
      desc: "Turn your coding idea into a startup journey.",
    },
    {
      img: "/hackathon.png",
      title: "Hackathon Series",
      desc: "Collaborate and solve real-world challenges.",
    },
    {
      img: "/women.png",
      title: "Women in Tech",
      desc: "Encouraging women participation in coding & innovation.",
    },
  ];

  return (
    <section className="py-10 mt-20">
      {/* Event Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-gray-500 mt-2">
          Join our exclusive events to learn, network, and grow with industry
          professionals
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {(showAll ? events : events.slice(0, 3)).map((event, idx) => (
          <Card
            key={idx}
            className="w-[400px] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader className="flex justify-end items-center">
              <span className="font-bold text-green-600">{event.price}</span>
            </CardHeader>

            <CardContent>
              <CardTitle className="mb-2">{event.title}</CardTitle>
              <p className="text-sm text-gray-500 mb-4">{event.description}</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-yellow-600" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-yellow-600" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-yellow-600" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-yellow-600" />
                  {event.attendees} attendees registered
                </div>
              </div>

              <Button className="w-full mt-4 bg-red-500 hover:bg-red-600">
                Register Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-50"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Events"}
        </Button>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">
          Event Highlights
        </h3>
        <div className="flex justify-center">
          <div
            className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 px-4"
            style={{ maxWidth: "1200px" }}
          >
            {" "}
            {/* 3 cards width */}
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[350px] max-w-[350px] relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
