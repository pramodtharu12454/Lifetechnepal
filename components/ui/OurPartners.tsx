"use client";

import Image from "next/image";

export default function OurPartners() {
  const partners = [
    { img: "/orbip.jpg", alt: "Orbip Education Foundation" },
    { img: "/cosmic.jpg", alt: "Cosmic Media" },
    { img: "/life computer.jpg", alt: "Life Computer" },
    { img: "/orbip1.jpg", alt: "Tech Vision" },
  ];

  // Duplicate list for infinite effect
  const loopPartners = [...partners, ...partners];

  return (
    <div className="p-6 bg-gray-50 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-4">
        Our <span className="text-red-500">Partners</span>
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-slide"
          style={{ animationDuration: "20s" }}
        >
          {loopPartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/3 px-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-transform hover:scale-105 h-[200px]">
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  width={180}
                  height={120}
                  className="object-contain w-auto h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide linear infinite;
        }
      `}</style>
    </div>
  );
}
