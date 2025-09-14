"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingEventCard() {
  const images = ["/bca.jpg", "/bba.jpg", "/it.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const event = {
    title: "Coding Competition 2025",
    price: "Free",
    description:
      "Showcase your coding skills and win exciting prizes! Open for students and young innovators.",
    date: "Saturday, September 28, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Life Tech Innovation Center",
    attendees: 150,
    detailPage: "/event/dashboard",
    registerPage: "/event/service", // updated register link
  };

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-0 mt-12">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-6">
        {/* Hero Image */}
        <div className="relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:brightness-110">
          <Image
            src={images[currentImage]}
            alt={event.title}
            fill
            className="object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Event Info Card */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 transform hover:scale-105 transition-all duration-500">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full text-sm sm:text-md font-semibold mb-4 inline-block">
            {event.price}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {event.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-md md:text-lg mb-6">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Calendar className="text-green-500 shrink-0" size={18} />{" "}
              {event.date}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Clock className="text-blue-500 shrink-0" size={18} />{" "}
              {event.time}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <MapPin className="text-red-500 shrink-0" size={18} />{" "}
              {event.location}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition text-sm sm:text-base">
              <Users className="text-purple-500 shrink-0" size={18} />{" "}
              {event.attendees} attendees
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={event.registerPage} passHref>
              <Button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
                Register Now
              </Button>
            </Link>
            <Link href={event.detailPage} passHref>
              <Button className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-900 text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
