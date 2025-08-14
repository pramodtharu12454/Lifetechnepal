"use client";

import { Typography, Box, Card, CardContent } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BoltIcon from "@mui/icons-material/Bolt";

export default function AboutLifeTech() {
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
            Life Tech began as a small team of passionate technologists who
            believed that every business deserves access to world-class
            technology solutions. Today, we have grown into a comprehensive
            technology partner serving clients across industries.
          </p>
          <p className="text-gray-600">
            Our journey has been marked by continuous learning, innovation, and
            an unwavering commitment to our clients success. We donot just
            deliver projects; we build lasting partnerships that drive
            sustainable growth.
          </p>
        </div>

        {/* Red Box (Founded 2013) */}
        <Card className="bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <CardContent className="text-center">
            <Typography variant="h4" fontWeight="bold">
              2013
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
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {/* Feature 1 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="text-center space-y-2">
            <GroupsIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Team Excellence</h4>
            <p className="text-sm text-gray-600">
              Our diverse team of experts brings together decades of experience
              in technology and education.
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="text-center space-y-2">
            <TrackChangesIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Innovation Focus</h4>
            <p className="text-sm text-gray-600">
              We stay ahead of technology trends to deliver cutting-edge
              solutions that drive real business value.
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="text-center space-y-2">
            <VerifiedUserIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Quality Commitment</h4>
            <p className="text-sm text-gray-600">
              Every project undergoes rigorous quality assurance to ensure
              exceptional results and client satisfaction.
            </p>
          </CardContent>
        </Card>

        {/* Feature 4 */}
        <Card className="p-6 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <CardContent className="text-center space-y-2">
            <BoltIcon fontSize="large" className="text-red-500" />
            <h4 className="font-semibold">Rapid Delivery</h4>
            <p className="text-sm text-gray-600">
              Our agile methodologies enable us to deliver high-quality
              solutions quickly and efficiently.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
