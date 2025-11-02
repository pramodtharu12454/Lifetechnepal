"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SecondLastSection() {
  const items = [
    {
      id: 1,
      title: "Training",
      desc: "Life Tech offers expert IT training in web, software, hardware & networking.",
    },
    {
      id: 2,
      title: "Project Work",
      desc: "Apply your skills with real-world projects guided by mentors.",
    },
    {
      id: 3,
      title: "Evaluation",
      desc: "We assess your performance to help identify your strengths and prepare you for opportunities.",
    },
    {
      id: 4,
      title: "Internship / Placement",
      desc: "Get connected with top companies for real internships and job placement support.",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side Images */}
          <div className="relative md:w-1/2 w-full flex justify-center">
            <Card className="rounded-2xl overflow-hidden shadow-lg w-full md:w-[90%]">
              <Image
                src="/image2.png"
                alt="classroom"
                width={1000}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-[75%] left-[25%] -bottom-8 rounded-2xl shadow-2xl overflow-hidden"
            ></motion.div>
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 w-full md:pl-16 mt-10 md:mt-0">
            <h4 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 leading-snug">
              Professional IT Training, Internship Programs, and Business
              Software Solutions
            </h4>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <Badge className="rounded-full w-9 h-9 flex items-center justify-center bg-blue-600 text-white text-lg font-bold shadow-md">
                    {item.id}
                  </Badge>
                  <div>
                    <h5 className="font-bold text-lg mb-1 text-gray-900">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Heading */}
        <div className="text-center mt-24">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Choose your course, fuel your passion, and launch your dream career
          </h1>
        </div>
      </div>
    </div>
  );
}
