"use client";

import { useState } from "react";
import { Typography, Box, Card } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "@/components/ui/button"; // ✅ ShadCN button
import Image from "next/image";

export default function AboutLifeTech() {
  const [showMore, setShowMore] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white mt-10">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">
          About <span className="text-red-600">Life Tech</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Founded with a vision to bridge the gap between technology and
          business success, Life Tech has been at the forefront of digital
          transformation for over a decade.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Life Tech PVT.Ltd. is a software development company in Nepal that
            deals with web and software Solutions. It is a strong and energetic
            team that is always ready to solve your problems. We assure you that
            we will our work to keep it with our motto committed to developing
            and delivering software products and services that tackle various
            challenges faced by individuals and businesses in Nepal. The company
            utilizes emerging technologies to create solutions that enhance
            productivity, efficiency, and overall user experience. Life Tech
            invests in researching emerging technologies to deliver advanced
            solutions to clients, staying a head of the curve and remaining
            adaptable in an ever-evolving technology landscape.
          </p>
          <p className="text-gray-600">
            At Life Tech, we understand the importance of students Technology
            job market. IT Training, Skill Workshops, for real-world ,
            entrepreneurship Training, Leadership, Creativity, Industrial Visits
            for real world business insights, Internship Opportunities to start
            careers, Job Placement Support in the tech world.
          </p>
        </div>

        {/* Red Box (Founded 2010) */}
        <Card className="bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-center">
            <Typography variant="h4" fontWeight="bold">
              2010
            </Typography>
            <Typography variant="body2" className="opacity-90">
              Founded
            </Typography>
            <div className="border-t border-white my-4"></div>
            <Box className="flex justify-around text-sm font-medium">
              <div className="px-4">
                <p className="font-semibold">500+</p>
                <p className="text-xs opacity-90">Projects</p>
              </div>
              <div className="px-4">
                <p className="font-semibold">50+</p>
                <p className="text-xs opacity-90">Team Members</p>
              </div>
            </Box>
          </div>
        </Card>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {/* Feature 1 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-center space-y-2">
            <GroupsIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Team Excellence</h4>
            <p className="text-sm text-gray-600">
              Our diverse team of experts brings together decades of experience
              in technology and education.
            </p>
          </div>
        </Card>

        {/* Feature 2 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-center space-y-2">
            <TrackChangesIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Innovation Focus</h4>
            <p className="text-sm text-gray-600">
              We stay ahead of technology trends to deliver cutting-edge
              solutions that drive real business value.
            </p>
          </div>
        </Card>

        {/* Feature 3 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-center space-y-2">
            <VerifiedUserIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Quality Commitment</h4>
            <p className="text-sm text-gray-600">
              Every project undergoes rigorous quality assurance to ensure
              exceptional results and client satisfaction.
            </p>
          </div>
        </Card>

        {/* Feature 4 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-center space-y-2">
            <BoltIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Rapid Delivery</h4>
            <p className="text-sm text-gray-600">
              Our agile methodologies enable us to deliver high-quality
              solutions quickly and efficiently.
            </p>
          </div>
        </Card>
      </div>

      {/* ✅ Buttons Section */}
      <div className="text-center mt-12 space-x-4">
        <Button
          size="lg"
          onClick={() => setShowMore(!showMore)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 rounded-lg shadow-lg"
        >
          {showMore ? "Hide Info" : "Learn More"}
        </Button>

        <Button
          size="lg"
          onClick={() => setShowTeam(!showTeam)}
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-6 rounded-lg shadow-lg"
        >
          {showTeam ? "Hide Team" : "View Team"}
        </Button>
      </div>

      {/* ✅ Extra Info Section */}
      {showMore && (
        <div className="mt-8 max-w-3xl mx-auto text-center text-gray-600">
          <p>
            Life Tech continuously works with startups, enterprises, and
            institutions to create digital products that shape the future. Our
            values are rooted in innovation, collaboration, and delivering
            measurable results for our clients.
          </p>
        </div>
      )}

      {/* ✅ Team Section */}
      {showTeam && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Ramesh Pokhrel", role: "CEO", img: "/gallery/30.jpg" },
            {
              name: "Pramod Tharu",
              role: "FullStack Developer",
              img: "/pramod.jpg",
            },
            {
              name: "Sitaram Rimal",
              role: "Project Manager",
              img: "/team.png",
            },
            { name: "Anisha Sharma", role: "UI/UX Designer", img: "/team.png" },
            {
              name: "Bikash Karki",
              role: "Software Engineer",
              img: "/team.png",
            },
            { name: "Manisha KC", role: "QA Specialist", img: "/team.png" },
          ].map((member, i) => (
            <Card
              key={i}
              className="relative shadow-md rounded-xl overflow-hidden hover:shadow-xl transition group"
            >
              {/* ✅ Full cover photo */}
              <div className="w-full h-64 relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* ✅ Overlay text */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
