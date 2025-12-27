import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://i.ibb.co.com/pj5Y6KQv/treeplantation04.jpg",
    "https://i.ibb.co.com/tw0NxHXX/Blood-Donation-Camps.jpg",
    "https://i.ibb.co.com/QjTPHhwW/Youth-Leadership-Seminars.jpg",
    "https://i.ibb.co.com/MkR8qkQd/Food-Distribution-Drives.jpg",
    "https://i.ibb.co.com/zW968X4b/Community-Sports-Events.jpg",
    "https://i.ibb.co.com/MygL71C5/Community-Clean-Up-Drives.jpg",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-base-200">
      <div
        className="
          w-full lg:w-[1250px]
          mx-auto
          px-4 sm:px-6
        "
      >
        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold text-center
            mb-8 sm:mb-10 lg:mb-12
          "
        >
          Impact Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {images.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={idx}
              className="overflow-hidden rounded-xl shadow-md lg:shadow-lg"
            >
              <img
                src={img}
                alt="Event"
                className="
                  w-full
                  h-48 sm:h-56 lg:h-55
                  object-cover
                  hover:scale-110
                  transition-transform duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
