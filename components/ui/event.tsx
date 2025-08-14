"use client";

import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UpcomingEvents() {
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
  ];

  return (
    <section className="py-10 mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-gray-500 mt-2">
          Join our exclusive events to learn, network, and grow with industry
          professionals
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, idx) => (
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
        >
          View All Events
        </Button>
      </div>
    </section>
  );
}
