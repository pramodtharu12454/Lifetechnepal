"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Highly functional & visually appealing websites designed to meet your needs. We build fast, secure and scalable solutions.",
    image: "/images/website.png",
  },
  {
    title: "Software Development",
    description:
      "Custom system/software tailored to your business requirements with long descriptions that might go beyond the normal size.",
    image: "/images/software.jpg",
  },
  {
    title: "Graphics Design",
    description:
      "Creative designs that communicate your brand’s story effectively.",
    image: "/images/graphic.jpg",
  },
  {
    title: "App Development",
    description:
      "Innovative and user-friendly mobile applications designed to engage users.",
    image: "/images/appdev.png",
  },
  {
    title: "Logo Design",
    description:
      "Unique and professional logos to establish your brand identity.",
    image: "/images/logo.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-green-50">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Our Services
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 drop-shadow-md">
          Exceptional Services For Your{" "}
          <span className="text-green-600 drop-shadow-lg">Business Growth</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base drop-shadow-sm">
          Discover our wide range of digital solutions to enhance your online
          presence.
        </p>
      </div>

      {/* Grid Layout (3 cards only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.slice(0, 3).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.1,
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
          >
            <Card className="group h-[400px] flex flex-col justify-between rounded-2xl border border-gray-100 shadow-lg transition-transform duration-300 bg-white hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-300 hover:to-green-300 cursor-pointer overflow-hidden">
              <CardContent className="p-6 text-center flex flex-col items-center text-gray-700 group-hover:text-white h-full">
                {/* Square Image */}
                <motion.div
                  className="w-28 h-28 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white/20 mb-4 shadow-md"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={112}
                    height={112}
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:brightness-150 group-hover:scale-110"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="font-semibold text-lg sm:text-xl mb-2 drop-shadow-md">
                  {service.title}
                </h3>

                {/* Scrollable Description */}
                <div className="overflow-y-auto max-h-[120px] text-sm sm:text-base pr-1 scrollbar-thin scrollbar-thumb-transparent group-hover:scrollbar-thumb-white/40 transition-all duration-300 group-hover:text-white drop-shadow-sm">
                  {service.description}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View All Services Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => (window.location.href = "/services")}
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 font-medium"
        >
          View All Services
        </button>
      </div>
    </section>
  );
}
