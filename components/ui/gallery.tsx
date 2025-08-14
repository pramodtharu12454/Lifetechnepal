"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function GalleryAlbum() {
  const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
    "/gallery/23.jpg",
    "/gallery/24.jpg",
    "/gallery/25.jpg",
    "/gallery/26.jpg",
    "/gallery/27.jpg",
    "/gallery/28.jpg",
    "/gallery/29.jpg",
    "/gallery/30.jpg",
  ];

  return (
    <section className="w-full py-16 bg-white mt-7">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery Album</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {galleryImages.map((src, index) => (
          <Card
            key={index}
            className="flex-[1_1_calc(25%-24px)] max-w-[calc(25%-24px)] min-w-[220px] h-[250px] overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="p-0">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
